"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { deriveToken, isValidAdminCookie } from "@/src/lib/adminAuth";

export type LoginState = { error: string } | null;

export async function verifyAdmin(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = (formData.get("password") as string).trim();

  if (!(await isValidAdminCookie(await deriveToken(password)))) {
    return { error: "Mot de passe incorrect." };
  }

  const token = await deriveToken(process.env.ADMIN_SECRET!);
  const cookieStore = await cookies();
  cookieStore.set("admin_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  redirect("/admin");
}
