export default async function Home() {
  const res = await fetch("test-cache-git-main-b4rb13-s-team.vercel.app/api/test", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 1,
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
