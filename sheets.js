import Papa from "papaparse";

export async function fetchProductsFromSheet(sheetUrl) {
  const csvUrl = toCsvUrl(sheetUrl);
  const res = await fetch(csvUrl, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch sheet");
  const text = await res.text();
  const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
  const rows = (parsed.data || []).map((r,i) => ({
    id: i + 1,
    title: (r.Name || r.name || r.Title || "").toString().trim(),
    price: toInt(r.Price || r.price || r.Harga),
    imageUrl: (r.Image || r.image || r.Gambar || "").toString().trim() || null,
    stock: toInt(r.Stock || r.stock || r.Stok || "0")
  })).filter(x => x.title && Number.isInteger(x.price));
  return rows;
}

function toInt(v) {
  const n = parseInt(String(v).replace(/[^0-9]/g,''), 10);
  return Number.isFinite(n) ? n : 0;
}

function toCsvUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("docs.google.com")) {
      const m = u.pathname.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
      const id = m ? m[1] : null;
      const gid = new URLSearchParams(u.hash.replace('#','?')).get("gid") || "0";
      if (id) return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&gid=${gid}`;
    }
  } catch {}
  return url;
}
