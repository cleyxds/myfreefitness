import { createContext, useContext, ReactNode, useCallback } from "react"

import { useSession } from "next-auth/react"
import { useQuery } from "@tanstack/react-query"

import { queryKeys } from "@/constants"

type UserContextType = {
  user: User
  userId: string
  email?: String
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const session = useSession()
  const sessionUser = session.data?.user
  const email = sessionUser?.email as string | undefined

  const fetchUser = useCallback(async (email: string) => {
    const request: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    return await fetch(`/api/users/me?email=${email}`, request).then((res) => res.json())
  }, [])

  const { data: user } = useQuery({
    queryKey: [queryKeys.user, email],
    queryFn: () => fetchUser(email!),
    enabled: Boolean(email),
    staleTime: Infinity,
  })

  const userId = user?.id

  return (
    <UserContext.Provider value={{ user, userId, email }}>
      {children}
    </UserContext.Provider>
  )
}

export default function useCurrentUser() {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }

  return context
}
