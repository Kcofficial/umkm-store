'use client';
import { useState } from 'react';

export default function StoreCreateForm() {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [sheetUrl, setSheetUrl] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/stores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, slug, description, sheetUrl, whatsapp })
    });
    if (res.ok) window.location.href = `/s/${slug}`;
    else alert('Gagal membuat toko—cek slug atau URL sheet.');
  };

  return (
    <form onSubmit={submit} className="card space-y-3">
      <h3 className="text-lg font-semibold">Buat Toko dari Google Sheets</h3>
      <input className="input" placeholder="Nama toko" value={name} onChange={e=>setName(e.target.value)} />
      <div className="flex gap-2 items-center">
        <span className="text-gray-500">/s/</span>
        <input className="input" placeholder="slug-toko" value={slug} onChange={e=>setSlug(e.target.value.toLowerCase().replace(/\s+/g,'-'))} />
      </div>
      <textarea className="input" placeholder="Deskripsi singkat" value={description} onChange={e=>setDescription(e.target.value)} />
      <input className="input" placeholder="Link Google Sheet (Anyone with link / Publish CSV)" value={sheetUrl} onChange={e=>setSheetUrl(e.target.value)} />
      <input className="input" placeholder="Nomor WhatsApp (628xxxx)" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} />
      <button className="btn btn-primary" type="submit">Buat</button>
    </form>
  )
}
