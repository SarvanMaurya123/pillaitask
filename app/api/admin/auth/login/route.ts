/* eslint-disable @typescript-eslint/no-explicit-any */
import { signJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Email and password are required",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    const dbAdmin = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    });

    if (!dbAdmin) {
      return NextResponse.json(
        {
          message: "Account does not exist. Please register.",
          success: false,
        },
        {
          status: 401,
        }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, dbAdmin.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "Invalid credentials. Please try again.",
          success: false,
        },
        {
          status: 401,
        }
      );
    }

    const token = signJwt({ email: dbAdmin.email, id: dbAdmin.id });

    if (!token) {
      return NextResponse.json(
        {
          message: "Token creation failed. Please try again.",
          success: false,
        },
        {
          status: 500,
        }
      );
    }

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 5,
    });

    return response;
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: (error as any)?.message || "Internal Server Error",
        status: 500,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
