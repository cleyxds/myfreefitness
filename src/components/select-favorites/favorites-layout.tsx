"use client"

import { useFormikContext } from "formik"

import Button from "@mui/material/Button"
import Grid2 from "@mui/material/Grid2"

import type {
  FavoritesProps,
  SelectFavoritesComponentProps,
} from "@/app/select-favorites/page"

type ChildrenProps = {
  formik: ReturnType<typeof useFormikContext<FavoritesProps>>
  handleNext: () => void
}

export default function FavoritesLayout({
  handleNext,
  isLastStep,
  children,
}: {
  children: React.ReactNode | ((props: ChildrenProps) => JSX.Element)
  isLastStep: boolean
} & SelectFavoritesComponentProps) {
  const formik = useFormikContext<FavoritesProps>()

  return (
    <>
      {children instanceof Function
        ? children({ formik, handleNext: () => handleNext?.() })
        : children}

      <Grid2 size={12} position="fixed" bottom={0} left={0} right={0}>
        {isLastStep ? (
          <Button
            variant="contained"
            type="submit"
            fullWidth
            onClick={() => formik.handleSubmit()}
            disabled={formik.isSubmitting}
            loading={formik.isSubmitting}
            sx={{
              bgcolor: "green_primary.main",
              textTransform: "uppercase",
              fontFamily: "var(--font-bebasneue)",
              fontSize: 20,
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: "0.5px",
              color: "common.white",
              minHeight: "3.5rem",
              borderRadius: 0.5,
            }}
          >
            Começar
          </Button>
        ) : (
          <Button
            variant="contained"
            type="button"
            fullWidth
            onClick={handleNext}
            sx={{
              bgcolor: "green_primary.main",
              textTransform: "uppercase",
              fontFamily: "var(--font-bebasneue)",
              fontSize: 20,
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: "0.5px",
              color: "common.white",
              minHeight: "3.5rem",
              borderRadius: 0.5,
            }}
          >
            Próximo passo
          </Button>
        )}
      </Grid2>
    </>
  )
}
