/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCurrentUser } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const admin = await getCurrentUser();

    if (!admin)
      return NextResponse.json(
        {
          admin: null,
          message:
            "Unauthorized. Please log in. Jwt may be missing or invalid.",
          success: false,
        },
        { status: 401 }
      );

    const response = NextResponse.json(
      {
        message: "Logout successful",
        success: true,
      },
      { status: 200 }
    );

    response.cookies.delete("token");

    return response;
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message:
          (error as any)?.response?.data?.message ||
          (error as any)?.message ||
          "Failed to log out. Please try again.",
        status: 500,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
