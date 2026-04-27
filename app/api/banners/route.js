import { prisma } from "@/lib/prisma";
import { json, requireDatabase } from "@/lib/api";
import { getCatalogSnapshot } from "@/lib/catalog";

export async function GET() {
  const catalog = await getCatalogSnapshot();
  return json(catalog.banners);
}

export async function POST(request) {
  const dbError = requireDatabase();
  if (dbError) return dbError;

  try {
    const body = await request.json();

    const banner = await prisma.banner.create({
      data: {
        title: body.title,
        link: body.link,
        description: body.description || "",
        imageUrl: body.imageUrl,
      },
    });

    return json(banner, { status: 201 });
  } catch (error) {
    console.error(error);
    return json(
      {
        message: "Failed to create banner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
