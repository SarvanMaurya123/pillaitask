import { JwtResponseType } from "@/app/types/admin/jwtResponseType";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = "5d";

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is missing in environment variables");
}

export function signJwt(payload: { email: string; id: string }) {
  if (!payload) return null;

  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyJwt(token: string): JwtResponseType | null {
  try {
    if (!token) return null;

    return jwt.verify(token, JWT_SECRET) as JwtResponseType;
  } catch (error) {
    console.error("JWT verification failed: ", error);
    return null;
  }
}
