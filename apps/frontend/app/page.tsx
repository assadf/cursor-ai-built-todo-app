export default async function Home() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:3001/v1';
  const res = await fetch(`${apiBase}/hello`, { cache: 'no-store' });
  const text = await res.text();
  return (
    <main className="min-h-screen p-8 flex items-center justify-center">
      <div className="text-2xl font-semibold">Backend says: {text}</div>
    </main>
  );
}
