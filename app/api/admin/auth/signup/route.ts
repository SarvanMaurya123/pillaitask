import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { name, email, password, confirmPassword } = await request.json();

  if (!name || !email || !password || !confirmPassword) {
    return NextResponse.json(
      {
        message: "Name, email, password and confirm password are required",
        success: false,
      },
      {
        status: 400,
      }
    );
  }

  //Exta validation for password confirmation already added in frontend.

  if (password !== confirmPassword) {
    return NextResponse.json(
      {
        message: "Password and confirm password do not match",
      },
      {
        status: 400,
      }
    );
  }

  const isAdminExist = await prisma.admin.findUnique({
    where: { email },
  });

  if (isAdminExist) {
    return NextResponse.json(
      {
        message: "Admin with this email already exists",
      },
      {
        status: 400,
      }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = await prisma.admin.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  console.log("New admin created:", newAdmin);

  return NextResponse.json(
    {
      message: "Admin registered successfully",
      status: 201,
      success: true,
    },
    {
      status: 201,
    }
  );
}
