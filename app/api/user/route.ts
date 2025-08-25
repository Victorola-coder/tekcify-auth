import { tekcifyClient } from "@/app/lib/tekcify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("tekcify_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "No authentication token found" },
        { status: 401 }
      );
    }

    tekcifyClient.setToken(token);
    const userInfo = await tekcifyClient.getUserInfo();

    return NextResponse.json({ user: userInfo });
  } catch (error) {
    console.error("User info error:", error);
    return NextResponse.json(
      { error: "Failed to get user information" },
      { status: 401 }
    );
  }
}
