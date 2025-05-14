import { redirect } from "next/navigation"

import { isAuthenticated } from "@/actions/auth"

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (await isAuthenticated()) ? redirect("/inicio") : children
}
