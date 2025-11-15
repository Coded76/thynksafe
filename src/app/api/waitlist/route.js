import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  try {
    const resp = await fetch(
      "https://thynksafe.onrender.com/api/waitlist/join",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await resp.json();

    return NextResponse.json(data, { status: resp.status });
  } catch (error) {
    console.error("Waitlist Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
