"use client"

import { useState } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { SessionProvider } from "next-auth/react"
import { UserProvider } from "@/hooks/use-current-user"

import ToastProvider from "@/hooks/use-toast"

export default function DataRoot({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <UserProvider>
          <ToastProvider>{children}</ToastProvider>
        </UserProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
