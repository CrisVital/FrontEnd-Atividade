const BASE = 'https://crudcrud.com/api/<YOUR_API_KEY>/tvs';

export async function listTVs() {
  const res = await fetch(BASE);
  return res.json() as Promise<Array<{ _id: string; marca: string; modelo: string; canais: number }>>;
}

export async function addTV(tv: { marca: string; modelo: string; canais: number }) {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tv),
  });
  return res.json();
}

export async function deleteTV(id: string) {
  await fetch(`${BASE}/${id}`, { method: 'DELETE' });
}
