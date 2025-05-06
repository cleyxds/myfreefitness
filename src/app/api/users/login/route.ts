import { NextResponse } from "next/server"

import { prisma } from "@/prisma"

import bcrypt from "bcrypt"

import * as Yup from "yup"

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format.").required("Email is required."),
  password: Yup.string().required("Password is required."),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { email, password } = await loginSchema.validate(body)

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user || !user.password || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        {
          messageKey: "user.login.failed",
          message: "Invalid email or password.",
        },
        { status: 401 }
      )
    }

    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      {
        messageKey: "user.login.success",
        message: "Login successful.",
        data: userWithoutPassword,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        messageKey: "user.login.error",
        message: "An error occurred during login.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
