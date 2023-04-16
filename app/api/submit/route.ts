import redis from "@/lib/upstash";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const data = {
    rating: String(body?.rating) || "0",
    recommendation: String(body?.recommendation) || "false",
    comment: String(body?.comment) || "",
  };

  const id =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  try {
    //Store the survey data
    await redis.hset(`entries:${id}`, data);

    //Store the id of the survey to retrieve it later
    await redis.sadd("entries", `entries:${id}`);
  } catch (error) {
    console.error("Failed to insert data into redis", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to insert data into redis",
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Data inserted successfully",
    },
    { status: 200 }
  );
}
