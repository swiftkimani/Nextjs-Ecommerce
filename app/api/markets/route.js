import { prisma } from "@/lib/prisma";
import { json, requireDatabase } from "@/lib/api";
import { getCatalogSnapshot } from "@/lib/catalog";

export async function GET() {
  const catalog = await getCatalogSnapshot();
  return json(catalog.markets);
}

export async function POST(request) {
  const dbError = requireDatabase();
  if (dbError) return dbError;

  try {
    const body = await request.json();

    const market = await prisma.market.create({
      data: {
        title: body.title,
        slug: body.slug,
        logoUrl: body.logoUrl || "",
        description: body.description || "",
      },
    });

    return json(market, { status: 201 });
  } catch (error) {
    console.error(error);
    return json(
      {
        message: "Failed to create market",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
