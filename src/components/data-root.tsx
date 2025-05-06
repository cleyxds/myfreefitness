"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { SessionProvider } from "next-auth/react"

import ToastProvider from "@/hooks/use-toast"

const queryClient = new QueryClient()

export default function DataRoot({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ToastProvider>{children}</ToastProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
