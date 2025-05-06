import { NextResponse } from "next/server"

import { prisma } from "@/prisma"

import bcrypt from "bcrypt"

import * as Yup from "yup"

import { createLog } from "@/utils/log"

const registerUserSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required."),
  phone: Yup.string().optional(),
  email: Yup.string().email("Invalid email format.").required("Email is required."),
  password: Yup.string().required("Password is required."),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { email, fullname, password, phone } = await registerUserSchema.validate(body)

    const hashedPassword = await bcrypt.hash(password, 10)

    const now = new Date()

    const log = createLog("created", "sign-up")

    const user = await prisma.user.create({
      data: {
        email,
        fullname,
        phone,
        password: hashedPassword,
        createdAt: now,
        updatedAt: now,
        state: "IN_PROGRESS",
        createdBy: "sign-up",
        updatedBy: "sign-up",
        logs: {
          toJSON: () => [log],
        },
      },
    })

    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json(
      {
        messageKey: "user.registered",
        message: "User registered successfully.",
        data: userWithoutPassword,
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return NextResponse.json(
        { error: error.errors, message: "Validation error." },
        { status: 422 }
      )
    }

    return NextResponse.json(
      {
        error: "An error occurred while registering the user.",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
