// src/app/api/hello/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Portkey } from "portkey-ai";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  get,
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const getApikeyFromUid = async (uid: string) => {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const usersRef = ref(db, "users");
  const q = query(usersRef, orderByChild("uid"), equalTo(uid));

  const snapshot = await get(q);

  if (snapshot.exists()) {
    snapshot.forEach((childSnap) => {
      console.log("User found:", childSnap.key, childSnap.val());
    });
    return snapshot.val();
  } else {
    return null;
  }
};

export async function GET(req: NextRequest) {
  const tv = process.env.TEST_VAR;

  return NextResponse.json({ message: `GET 요청 성공!, ${tv}` });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body.uid) {
    return NextResponse.json({
      message: "request failed. cannot find uid.",
      data: {
        newVkey: "none",
        status: 200,
      },
    });
  }

  // PORT_API_KEY 요청
  // DB에서 UID로 이미 있는지 검사, 있으면 바로 반환. 없으면 만들어서 반환
  try {
    // const apikey = getApikeyFromUid(body.uid);
    const apiKey = null;

    if (apiKey !== null) {
      return NextResponse.json({
        message: "POST succeed!",
        data: {
          newVkey: apiKey,
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
        "sub-type": "user",
        workspace_id: process.env.WORKSPACE_ID,
        scopes: [
          // "logs.export",
          // "logs.list",
          // "logs.view",
          // "configs.create",
          // "configs.update",
          // "configs.delete",
          // "configs.read",
          // "configs.list",
          "virtual_keys.create",
          "virtual_keys.update",
          "virtual_keys.delete",
          "virtual_keys.read",
          "virtual_keys.list",
          "virtual_keys.copy",
        ],
      });

      // 그리고 이 apiKey를 firebase DB에 저장.

      return NextResponse.json({
        message: "POST 요청 성공!",
        data: {
          newVkey: apiKey,
          status: 200,
        },
      });
    }
  } catch (e) {
    return NextResponse.json({
      message: `POST FAILED ${e}`,
      data: {
        newVkey: "none",
        status: 400,
      },
    });
  }
}
