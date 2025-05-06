"use client"

import Link from "next/link"

import { useSession, signOut } from "next-auth/react"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import Header from "@/components/header"
import LoginForm from "@/components/auth/login-form"

export default function page() {
  const session = useSession()

  return (
    <Stack px={3} pb={3} pt={3.75}>
      <Stack gap={4.5}>
        <Header left="back" />

        <Stack gap={1.375}>
          <Typography>Welcome to Pro Fitness</Typography>

          <Typography>Hello there, sign in to continue!</Typography>
        </Stack>

        <LoginForm />

        {session.data && (
          <Stack gap={1.375}>
            <Typography>Welcome back, {session.data.user?.name}</Typography>

            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                signOut()
              }}
            >
              Logout
            </Button>
          </Stack>
        )}

        <Stack>
          <Typography align="center">
            Don’t have an account?&nbsp;
            <Link href="/welcome/register">
              <strong>Register!</strong>
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
