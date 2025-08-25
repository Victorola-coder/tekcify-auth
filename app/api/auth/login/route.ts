import { NextRequest, NextResponse } from "next/server";
import { tekcifyClient, TEKCIFY_CONFIG } from "@/app/lib/tekcify";

export async function GET(request: NextRequest) {
  try {
    const state = Math.random().toString(36).substring(7);

    const response = await tekcifyClient.initializeLogin({
      redirectUrl: TEKCIFY_CONFIG.redirectUrl,
      scope: TEKCIFY_CONFIG.scope,
      responseType: TEKCIFY_CONFIG.responseType,
      state: state,
    });

    const loginUrl = response.data.login_url;

    const responseObj = NextResponse.json({
      loginUrl,
      state,
    });

    responseObj.cookies.set("tekcify_state", state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 10, // 10 minutes
    });

    return responseObj;
  } catch (error) {
    console.error("Login initialization error:", error);
    return NextResponse.json(
      { error: "Failed to initialize login" },
      { status: 500 }
    );
  }
}
