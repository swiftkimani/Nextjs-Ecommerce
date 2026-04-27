import { prisma } from "@/lib/prisma";
import { json, requireDatabase } from "@/lib/api";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true, farmer: true },
    });
    if (!product) return json({ message: "Product not found" }, { status: 404 });
    return json(product);
  } catch (error) {
    return json({ message: "Failed to fetch product", error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const dbError = requireDatabase();
  if (dbError) return dbError;

  const { id } = await params;
  try {
    const body = await request.json();
    const product = await prisma.product.update({
      where: { id },
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description || "",
        imageUrl: body.imageUrl || "",
        sku: body.sku || null,
        barcode: body.barcode || null,
        productPrice: Number(body.productPrice || 0),
        salePrice: body.salePrice ? Number(body.salePrice) : null,
        tags: Array.isArray(body.tags) ? body.tags : [],
        categoryId: body.categoryId || null,
        farmerId: body.farmerId || null,
      },
      include: { category: true, farmer: true },
    });
    return json(product);
  } catch (error) {
    return json({ message: "Failed to update product", error: error.message }, { status: 500 });
  }
}
