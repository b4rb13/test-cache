export default async function Home() {
  const res = await fetch("https://cc46-62-89-6-162.ngrok-free.app/x", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 5,
    },
    cache: "no-cache",
  });
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
    </main>
  );
}
