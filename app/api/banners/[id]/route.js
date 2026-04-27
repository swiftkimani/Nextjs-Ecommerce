import { prisma } from "@/lib/prisma";
import { json, requireDatabase } from "@/lib/api";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const banner = await prisma.banner.findUnique({ where: { id } });
    if (!banner) return json({ message: "Banner not found" }, { status: 404 });
    return json(banner);
  } catch (error) {
    return json({ message: "Failed to fetch banner", error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const dbError = requireDatabase();
  if (dbError) return dbError;

  const { id } = await params;
  try {
    const body = await request.json();
    const banner = await prisma.banner.update({
      where: { id },
      data: {
        title: body.title,
        link: body.link,
        description: body.description || "",
        imageUrl: body.imageUrl,
      },
    });
    return json(banner);
  } catch (error) {
    return json({ message: "Failed to update banner", error: error.message }, { status: 500 });
  }
}
