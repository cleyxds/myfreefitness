"use client"

import Link from "next/link"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import Header from "@/components/header"
import RegisterForm from "@/components/auth/register-form"

export default function page() {
  return (
    <Stack px={3} pb={3} pt={3.75}>
      <Stack gap={4.5}>
        <Header left="back" />

        <Stack gap={1.375}>
          <Typography>Create account</Typography>

          <Typography>Please enter your credentials to proceed</Typography>
        </Stack>

        <RegisterForm />

        <Stack>
          <Typography align="center">
            Already have an account?&nbsp;
            <Link href="/welcome/login">
              <strong>Login!</strong>
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
