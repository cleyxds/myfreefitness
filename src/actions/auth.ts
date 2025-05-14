"use server"

import { getServerSession } from "next-auth"

export async function isAuthenticated() {
  const session = await getServerSession()
  return !!session
}
