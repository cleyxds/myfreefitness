"use client"

import { useState } from "react"

import { useRouter } from "next/navigation"

import Stack from "@mui/material/Stack"

import Steps from "@/components/onboarding/steps"
import OnboardingOne from "@/components/onboarding/onboarding-one"
import OnboardingTwo from "@/components/onboarding/onboarding-two"
import OnboardingThree from "@/components/onboarding/onboarding-three"

type OnbordingComponent = () => JSX.Element

const steps: OnbordingComponent[] = [OnboardingOne, OnboardingTwo, OnboardingThree]

export default function page() {
  const router = useRouter()

  const [activeStep, setActiveStep] = useState(0)

  const Component = steps[activeStep]

  const onFinish = () => router.push("/welcome")

  return (
    <Stack>
      <Component />

      <Steps
        steps={steps.length}
        step={activeStep}
        onChangeStep={setActiveStep}
        onFinish={onFinish}
        onSkip={onFinish}
      />
    </Stack>
  )
}
