"use client"

import Link from "next/link"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"

import Header, { icons } from "@/components/header"
import LoginForm from "@/components/auth/login-form"

export default function page() {
  const session = useSession()
  const router = useRouter()

  return (
    <Stack px={3} pb={3} pt={3.75}>
      <Stack gap={4.5}>
        <Header
          left={
            <IconButton onClick={() => router.back()} sx={{ alignSelf: "flex-start" }}>
              {icons["arrow-back"]({ sx: { color: "black_19.main" } })}
            </IconButton>
          }
        />

        <Stack>
          <Typography variant="bebas_neue_h2" color="black_19.main">
            Bem-vindo ao Pro Fitness
          </Typography>

          <Typography variant="bebas_neue_h2" color="black_19.main">
            Olá, faça login para continuar!
          </Typography>
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
