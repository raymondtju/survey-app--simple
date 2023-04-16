import redis from "@/lib/upstash";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    //Find all the entries in the set
    const entries = await redis.smembers("entries");

    //Get all survey entries by id/key

    //To run multiple queries at once, Upstash supports the use of the pipeline command. This way we can run multiple queries at once and get the results in a single call.
    const p = redis.pipeline();
    entries.forEach((id) => {
      p.hgetall(id);
    });
    const results = await p.exec();

    return NextResponse.json(
      {
        success: true,
        message: "Data retrieved successfully",
        data: results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to retrieve data from redis", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve data from redis",
      },
      { status: 500 }
    );
  }
}
