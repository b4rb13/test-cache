import { NextResponse } from "next/server";

export async function GET() {
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
  return NextResponse.json({ data });
}
