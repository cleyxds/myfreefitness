import NextAuth, { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const NEXTAUTH_URL = process.env.NEXTAUTH_URL
const LOGIN_URL = NEXTAUTH_URL + "/api/users/login"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const response = await fetch(LOGIN_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        })

        const result = await response.json()
        const data = result.data

        const authentication_user: User = {
          id: data.id,
          name: data.fullname,
          email: data.email,
          image: null,
        }

        return authentication_user
      },
    }),
  ],
})

export { handler as GET, handler as POST }
