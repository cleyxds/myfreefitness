import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma"

import * as yup from "yup"

const meSchema = yup.object().shape({
  email: yup.string().email().required(),
})

export async function GET(request: NextRequest) {
  try {
    const emailParam = request?.nextUrl?.searchParams?.get("email")

    const { email } = await meSchema.validate({ email: emailParam })

    const user = await prisma.user.findUnique({
      where: { email },
      omit: { password: true },
    })

    if (!user) {
      return NextResponse.json(
        {
          messageKey: "user.not-found",
          message: "User not found.",
        },
        { status: 404 }
      )
    }

    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        {
          messageKey: "user.me.validation-error",
          message: error.message,
        },
        { status: 422 }
      )
    }

    return NextResponse.json(
      {
        messageKey: "user.me.error",
        message: "An error occurred while fetching user data.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
