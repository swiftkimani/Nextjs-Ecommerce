import { prisma } from "@/lib/prisma";
import { json, requireDatabase } from "@/lib/api";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const coupon = await prisma.coupon.findUnique({ where: { id } });
    if (!coupon) return json({ message: "Coupon not found" }, { status: 404 });
    return json(coupon);
  } catch (error) {
    return json({ message: "Failed to fetch coupon", error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const dbError = requireDatabase();
  if (dbError) return dbError;

  const { id } = await params;
  try {
    const body = await request.json();
    const coupon = await prisma.coupon.update({
      where: { id },
      data: {
        title: body.title,
        couponCode: body.couponCode,
        expiryDate: new Date(body.expiryDate),
        isActive: body.isActive !== undefined ? Boolean(body.isActive) : undefined,
      },
    });
    return json(coupon);
  } catch (error) {
    return json({ message: "Failed to update coupon", error: error.message }, { status: 500 });
  }
}
