import { NextResponse } from "next/server";
import { isDatabaseConfigured } from "@/lib/prisma";

export function json(data, init) {
  return NextResponse.json(data, init);
}

export function requireDatabase() {
  if (!isDatabaseConfigured) {
    return json(
      {
        message:
          "DATABASE_URL is not configured. Add a PostgreSQL connection string, then run Prisma db push or migrate.",
      },
      { status: 503 }
    );
  }

  return null;
}

export function parseIdList(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map(String);
  }

  if (typeof value === "string" && value.length > 0) {
    return [value];
  }

  return [];
}
