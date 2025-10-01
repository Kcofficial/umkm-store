import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const body = await req.json();
  const { name, slug, description, sheetUrl, whatsapp } = body || {};
  if (!name || !slug || !sheetUrl) return new Response("Invalid", { status: 400 });
  try {
    const store = await prisma.store.create({ data: { name, slug, description, sheetUrl, whatsapp } });
    return Response.json(store);
  } catch (e) { return new Response("Error", { status: 400 }); }
}

export async function GET() {
  const stores = await prisma.store.findMany({ orderBy: { createdAt: 'desc' } });
  return Response.json(stores);
}
