export default async function Home() {
  const res = await fetch("https://test-cache-xi.vercel.app/api/test", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 5,
    },
    cache: "no-cache",
  });
  console.log(res, "<<<");
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
    </main>
  );
}
