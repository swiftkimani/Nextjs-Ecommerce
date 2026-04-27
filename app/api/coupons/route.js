import { prisma } from "@/lib/prisma";
import { json, requireDatabase } from "@/lib/api";
import { getCatalogSnapshot } from "@/lib/catalog";

export async function GET() {
  const catalog = await getCatalogSnapshot();
  return json(catalog.coupons);
}

export async function POST(request) {
  const dbError = requireDatabase();
  if (dbError) return dbError;

  try {
    const body = await request.json();

    const coupon = await prisma.coupon.create({
      data: {
        title: body.title,
        couponCode: body.couponCode,
        expiryDate: new Date(body.expiryDate),
      },
    });

    return json(coupon, { status: 201 });
  } catch (error) {
    console.error(error);
    return json(
      {
        message: "Failed to create coupon",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
