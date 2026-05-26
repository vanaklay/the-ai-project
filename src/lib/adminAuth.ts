const encoder = new TextEncoder();

export async function deriveToken(secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode("admin-session")
  );
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function isValidAdminCookie(
  cookieValue: string | undefined
): Promise<boolean> {
  const secret = process.env.ADMIN_SECRET;
  if (!secret || !cookieValue) return false;
  return cookieValue === (await deriveToken(secret));
}
