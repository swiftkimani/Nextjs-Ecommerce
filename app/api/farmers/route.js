import { prisma } from "@/lib/prisma";
import { json, requireDatabase } from "@/lib/api";
import { getCatalogSnapshot } from "@/lib/catalog";

export async function GET() {
  const catalog = await getCatalogSnapshot();
  return json(catalog.farmers);
}

export async function POST(request) {
  const dbError = requireDatabase();
  if (dbError) return dbError;

  try {
    const body = await request.json();

    const farmer = await prisma.farmer.create({
      data: {
        code: body.code,
        contactPerson: body.contactPerson || "",
        contactPersonPhone: body.contactPersonPhone || "",
        email: body.email || null,
        name: body.name,
        notes: body.notes || "",
        phone: body.phone || "",
        physicalAddress: body.physicalAddress || "",
        terms: body.terms || "",
      },
    });

    return json(farmer, { status: 201 });
  } catch (error) {
    console.error(error);
    return json(
      {
        message: "Failed to create farmer",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
