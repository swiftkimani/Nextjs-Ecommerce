import { prisma } from "@/lib/prisma";
import { json, parseIdList, requireDatabase } from "@/lib/api";
import { getCatalogSnapshot } from "@/lib/catalog";

export async function GET() {
  const catalog = await getCatalogSnapshot();
  return json(catalog.categories);
}

export async function POST(request) {
  const dbError = requireDatabase();
  if (dbError) return dbError;

  try {
    const body = await request.json();
    const marketIds = parseIdList(body.marketIds);

    const category = await prisma.category.create({
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description || "",
        imageUrl: body.imageUrl || "",
        markets: marketIds.length
          ? {
              connect: marketIds.map((id) => ({ id })),
            }
          : undefined,
      },
      include: {
        markets: true,
      },
    });

    return json(category, { status: 201 });
  } catch (error) {
    console.error(error);
    return json(
      {
        message: "Failed to create category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
