export async function GET() {
  const res = await fetch("https://cc46-62-89-6-162.ngrok-free.app/x", {
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
  console.log(data, '<<<');
  return Response.json({ data });
}
