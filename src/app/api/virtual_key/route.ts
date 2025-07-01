// src/app/api/hello/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Portkey } from "portkey-ai";

export async function GET(req: NextRequest) {
  const tv = process.env.TEST_VAR;

  return NextResponse.json({ message: `GET 요청 성공!, ${tv}` });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    // PORT_VIRTUAL_KEY 요청
    // DB에서 최근 1시간 이내의 vk가 있는지 검사, 없으면 만들어서 반환

    const portkey = new Portkey({
      apiKey: body.key,
      dangerouslyAllowBrowser: true,
    });

    const newVkey = await portkey.virtualKeys.create({
      name: "openai-VKey",
      provider: "openai",
      key: process.env.OPENAI_KEY,
      expires_at: "2025-07-01T21:28:24.650Z",
    });

    return NextResponse.json({
      message: "POST 요청 성공!",
      data: {
        newVkey: newVkey,
        status: 200,
      },
    });
  } catch {
    return NextResponse.json({
      message: "POST 요청 실패!",
      data: {
        newVkey: "none",
        status: 400,
      },
    });
  }
}
