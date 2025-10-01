'use client';
export default function ProductCard({ p, onAdd }) {
  return (
    <div className="card">
      <img src={p.imageUrl || 'https://placehold.co/600x400'} alt={p.title} className="w-full h-40 object-cover rounded-xl mb-3"/>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">{p.title}</h4>
          <p className="text-sm text-gray-500">Rp {p.price.toLocaleString('id-ID')}</p>
        </div>
        {onAdd && <button className="btn btn-primary" onClick={()=>onAdd(p)}>Tambah</button>}
      </div>
    </div>
  )
}
