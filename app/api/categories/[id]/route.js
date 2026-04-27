import { prisma } from "@/lib/prisma";
import { json, parseIdList, requireDatabase } from "@/lib/api";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const category = await prisma.category.findUnique({
      where: { id },
      include: { markets: { select: { id: true, title: true } } },
    });
    if (!category) return json({ message: "Category not found" }, { status: 404 });
    return json(category);
  } catch (error) {
    return json({ message: "Failed to fetch category", error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const dbError = requireDatabase();
  if (dbError) return dbError;

  const { id } = await params;
  try {
    const body = await request.json();
    const marketIds = parseIdList(body.marketIds);

    const category = await prisma.category.update({
      where: { id },
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description || "",
        imageUrl: body.imageUrl || "",
        markets: {
          set: marketIds.map((mid) => ({ id: mid })),
        },
      },
      include: { markets: true },
    });
    return json(category);
  } catch (error) {
    return json({ message: "Failed to update category", error: error.message }, { status: 500 });
  }
}
