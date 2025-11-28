import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Convert frontend values → Prisma enum values
function convertState(value: string) {
  const states: Record<string, string> = {
    Maharashtra: "Maharashtra",
    Karnataka: "Karnataka",
    Gujarat: "Gujarat",
    Rajasthan: "Rajasthan",
    TamilNadu: "TamilNadu",
  };

  return states[value] || null;
}

function convertProgram(value: string) {
  const programs: Record<string, string> = {
    "Engineering & Technology": "Engineering_and_Technology",
    "Management (BBA/MBA)": "Management_BBA_MBA",
    "Computer Applications (BCA/MCA)": "Computer_Applications_BCA_MCA",
    "Science (BSc/MSc)": "Science_BSc_MSc",
    "Commerce (BCom/MCom)": "Commerce_BCom_MCom",
    "Pharmacy": "Pharmacy",
    "Law (BA LLB / BBA LLB)": "Law_BA_LLB_BBA_LLB",
    "Design (BDes/MDes)": "Design_BDes_MDes",
  };

  return programs[value] || null;
}

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

    // ENUM FIX — converting the values BEFORE saving
    if (data.state) {
      const convertedState = convertState(data.state);
      if (!convertedState) {
        return NextResponse.json(
          { success: false, message: "Invalid state value" },
          { status: 400 }
        );
      }
      data.state = convertedState;
    }

    if (data.program) {
      const convertedProgram = convertProgram(data.program);
      if (!convertedProgram) {
        return NextResponse.json(
          { success: false, message: "Invalid program value" },
          { status: 400 }
        );
      }
      data.program = convertedProgram;
    }

    // Save to DB
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
