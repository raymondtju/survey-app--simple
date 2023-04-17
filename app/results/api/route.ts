import redis from "@/lib/upstash";
import { NextResponse } from "next/server";
import { SurveyData } from "../page";

export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const entries = await redis.smembers("entries");

    const data: any[] = [];

    const p = redis.pipeline();
    for (const id of entries) {
      p.hgetall(id);
    }
    const res = await p.exec();

    for (let i = 0; i < res.length; i++) {
      const id = entries[i];
      const value = res[i] as object;

      data.push({
        id: id,
        ...value,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Data retrieved successfully",
        data: data,
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

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const [delentry, delhash] = await Promise.all([
      redis.srem("entries", body.id),
      redis.del(body.id),
    ]);
    if (delentry !== 1 || delhash !== 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to delete data from redis",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Data deleted successfully",
        // data: results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to delete data from redis", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete data from redis",
      },
      { status: 500 }
    );
  }
}
