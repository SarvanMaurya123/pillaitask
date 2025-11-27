import { cookies } from "next/headers";
import { verifyJwt } from "@/lib/jwt";
import { JwtResponseType } from "@/app/types/admin/jwtResponseType";

export async function getCurrentUser(): Promise<JwtResponseType | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    return verifyJwt(token);
  } catch (error: unknown) {
    return null;
  }
}
