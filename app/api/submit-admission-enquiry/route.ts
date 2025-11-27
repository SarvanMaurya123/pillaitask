import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data) {
      return NextResponse.json(
        { message: "No data provided", success: false },
        { status: 400 }
      );
    }

    console.log("Received admission enquiry data: ", data);

    const enquiry = await prisma.admission.create({
      data: data,
    });

    console.log("Admission enquiry submitted successfully:", enquiry);

    return NextResponse.json(
      { message: "Admission enquiry submitted successfully", success: true },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error submitting admission enquiry: ", error);
    throw error;
  }
}
