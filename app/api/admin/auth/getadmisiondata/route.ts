import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const enquiries = await prisma.admission.findMany({
            orderBy: { createdAt: "desc" }, // optional: newest first
        });

        return NextResponse.json(
            { success: true, data: enquiries },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching enquiries:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Server error while fetching enquiries",
                error: String(error),
            },
            { status: 500 }
        );
    }
}
