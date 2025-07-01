// src/app/api/hello/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Portkey } from "portkey-ai";

export async function GET(req: NextRequest) {
  const tv = process.env.TEST_VAR;

  return NextResponse.json({ message: `GET 요청 성공!, ${tv}` });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  // PORT_API_KEY 요청
  // DB에서 이미 있는지 검사, 있으면 바로 반환. 없으면 만들어서 반환
  try {
    if (body.uid === "abcdefg") {
      return NextResponse.json({
        message: "POST 요청 성공!",
        data: {
          newVkey: "none",
          status: 200,
        },
      });
    } else {
      const portkey = new Portkey({
        apiKey: process.env.ADMIN_API_KEY,
      });

      const apiKey = await portkey.apiKeys.create({
        name: "API_KEY_NAME_0909",
        type: "organisation",
        "sub-type": "service",
        workspace_id: process.env.WORKSPACE_ID,
        scopes: [
          "logs.export",
          "logs.list",
          "logs.view",
          "configs.create",
          "configs.update",
          "configs.delete",
          "configs.read",
          "configs.list",
          "virtual_keys.create",
          "virtual_keys.update",
          "virtual_keys.delete",
          "virtual_keys.read",
          "virtual_keys.list",
          "virtual_keys.copy",
        ],
      });

      return NextResponse.json({
        message: "POST 요청 성공!",
        data: {
          newVkey: apiKey,
          status: 200,
        },
      });
    }
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
