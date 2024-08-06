import { db } from "@/lib/db";

export async function getUsers() {
  const response = await db.user.findMany({});
  return response;
}
