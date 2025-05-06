"use client"

import { Dispatch, SetStateAction } from "react"

import MobileStepper from "@mui/material/MobileStepper"
import Button from "@mui/material/Button"

export default function Steps({
  step,
  onChangeStep,
  onSkip,
  onFinish,
}: {
  step: number
  onChangeStep: Dispatch<SetStateAction<number>>
  onSkip?: () => void
  onFinish?: () => void
}) {
  const handleNext = () => onChangeStep((prevActiveStep) => prevActiveStep + 1)
  const handleBack = () => onChangeStep((prevActiveStep) => prevActiveStep - 1)

  return (
    <MobileStepper
      variant="dots"
      steps={3}
      position="static"
      activeStep={step}
      sx={{ flexGrow: 1 }}
      nextButton={
        step === 2 ? (
          <Button size="small" onClick={onFinish}>
            Começar
          </Button>
        ) : (
          <Button size="small" onClick={handleNext}>
            Próximo
          </Button>
        )
      }
      backButton={
        step === 0 ? (
          <Button size="small" onClick={onSkip}>
            Pular
          </Button>
        ) : (
          <Button size="small" onClick={handleBack}>
            Voltar
          </Button>
        )
      }
    />
  )
}
