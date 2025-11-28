import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const currentAdminData = await getCurrentUser();

    if (!currentAdminData) {
      return NextResponse.json(
        {
          success: false,
          message: "No admin is currently logged in or token not found.",
        },
        { status: 401 }
      );
    }

    const currentAdmin = await prisma.admin.findUnique({
      where: { email: currentAdminData.email },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!currentAdmin) {
      return NextResponse.json(
        { success: false, message: "Admin not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: currentAdmin },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error fetching current admin data: ", error);
    return NextResponse.json(
      { success: false, message: "Error fetching current admin data." },
      { status: 500 }
    );
  }
}
