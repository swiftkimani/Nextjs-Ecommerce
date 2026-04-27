import { prisma } from "@/lib/prisma";
import { json, parseIdList, requireDatabase } from "@/lib/api";
import { getCatalogSnapshot } from "@/lib/catalog";

export async function GET() {
  const catalog = await getCatalogSnapshot();
  return json(catalog.products);
}

export async function POST(request) {
  const dbError = requireDatabase();
  if (dbError) return dbError;

  try {
    const body = await request.json();

    const product = await prisma.product.create({
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
        isFeatured: Boolean(body.isFeatured ?? body.salePrice),
        categoryId: body.categoryId || null,
        farmerId: body.farmerId || null,
      },
      include: {
        category: true,
        farmer: true,
      },
    });

    return json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return json(
      {
        message: "Failed to create product",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
