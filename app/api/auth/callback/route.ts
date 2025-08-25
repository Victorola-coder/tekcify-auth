import { tekcifyClient } from "@/app/lib/tekcify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const error = searchParams.get("error");

    if (error) {
      return NextResponse.redirect(
        new URL(`/error?error=${error}`, request.url)
      );
    }

    if (!code) {
      return NextResponse.redirect(
        new URL("/error?error=no_code", request.url)
      );
    }

    const storedState = request.cookies.get("tekcify_state")?.value;
    if (state !== storedState) {
      return NextResponse.redirect(
        new URL("/error?error=invalid_state", request.url)
      );
    }

    const tokens = await tekcifyClient.verifyAuth(code);
    const userInfo = await tekcifyClient.getUserInfo();

    const response = NextResponse.redirect(new URL("/profile", request.url));

    response.cookies.set("tekcify_token", tokens.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    response.cookies.set("tekcify_user", JSON.stringify(userInfo), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    response.cookies.delete("tekcify_state");

    return response;
  } catch (error) {
    console.error("Callback error:", error);
    return NextResponse.redirect(
      new URL("/error?error=callback_failed", request.url)
    );
  }
}
