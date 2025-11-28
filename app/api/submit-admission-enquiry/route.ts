import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data) {
      return NextResponse.json(
        { success: false, message: "No data provided" },
        { status: 400 }
      );
    }

    console.log("Received admission enquiry:", data);

    const enquiry = await prisma.admission.create({
      data,
    });

    console.log("Saved admission enquiry:", enquiry);

    return NextResponse.json(
      { success: true, message: "Admission enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting enquiry:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
