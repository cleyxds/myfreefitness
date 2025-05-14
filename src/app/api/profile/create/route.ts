import { NextResponse } from "next/server"

import { prisma } from "@/prisma"

import * as Yup from "yup"

import { createLog } from "@/utils/log"

const createProfileSchema = Yup.object().shape({
  favorite: Yup.string().required("Favorite activity is required."),
  age: Yup.string().required("Age is required."),
  weight: Yup.string().required("Weight is required."),
  goalWeight: Yup.string().required("Goal weight is required."),
  height: Yup.string().required("Height is required."),
  fitnessLevel: Yup.string().required("Fitness level is required."),
  goal: Yup.string().required("Goal is required."),
  userId: Yup.string().required("User ID is required."),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { age, favorite, fitnessLevel, goal, goalWeight, height, weight, userId } =
      await createProfileSchema.validate(body)

    const now = new Date()

    const log = createLog("created", userId)

    const profile = await prisma.profile.create({
      data: {
        createdAt: now,
        updatedAt: now,
        state: "IN_PROGRESS",
        createdBy: userId,
        updatedBy: userId,
        age,
        favorite,
        fitnessLevel,
        goal,
        goalWeight,
        height,
        weight,
        userId,
        logs: {
          toJSON: () => [log],
        },
      },
    })

    if (!profile) throw new Error("Profile not created.")

    return NextResponse.json(
      {
        messageKey: "profile.create.success",
        message: "Profile created successfully.",
        profile,
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return NextResponse.json(
        {
          messageKey: "profile.create.validation-error",
          message: error.message,
        },
        { status: 422 }
      )
    }

    if (error instanceof Error) {
      return NextResponse.json(
        {
          messageKey: "profile.create.error",
          message: error.message,
        },
        { status: 500 }
      )
    }
  }
}
