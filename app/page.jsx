import StoreCreateForm from "@/components/StoreCreateForm";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const stores = await prisma.store.findMany({ orderBy: { createdAt: 'desc' }, take: 6 });
  return (
    <div className="space-y-10">
      <header className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-semibold">Turn Google Sheets into Online Store — untuk UMKM</h1>
        <p className="text-gray-600">Seperti store.link — cukup tempel link Google Sheet, langsung jadi toko.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><StoreCreateForm/></div>
        <div className="card">
          <h3 className="font-semibold mb-2" id="fitur">Format Sheet (kolom wajib)</h3>
          <pre className="bg-gray-50 p-3 rounded-xl text-sm overflow-auto">{`Name,Price,Image,Stock
Keripik Singkong,15000,https://...,10
Sambal Roa,28000,https://...,5`}</pre>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mt-3">
            <li>Share Google Sheet: Anyone with the link (Viewer)</li>
            <li>Atau Publish to the web → CSV</li>
            <li>Checkout lewat WhatsApp penjual</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="font-semibold mb-3">Toko terbaru</h3>
        <div className="grid-cards">
          {stores.map(s => (
            <a key={s.id} href={`/s/${s.slug}`} className="card hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm text-gray-500">/{s.slug}</div>
                </div>
                <span className="badge">Lihat</span>
              </div>
              {s.description && <p className="text-sm mt-2 text-gray-600">{s.description}</p>}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
