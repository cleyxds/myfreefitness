"use client"

import { ComponentProps, useState } from "react"

import { useRouter } from "next/navigation"
import Link from "next/link"

import { Formik, type FormikHelpers, type FormikValues } from "formik"

import * as Yup from "yup"

import useCurrentUser from "@/hooks/use-current-user"
import { useToast } from "@/hooks/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"

import Header, { icons } from "@/components/header"

import FavoritesOne from "@/components/select-favorites/favorites-one"
import FavoritesTwo from "@/components/select-favorites/favorites-two"
import FavoritesSeven from "@/components/select-favorites/favorites-seven"
import FavoritesEight from "@/components/select-favorites/favorites-eight"
import FavoritesLayout from "@/components/select-favorites/favorites-layout"
import FavoritesThree from "@/components/select-favorites/favorites-three"
import FavoritesFour from "@/components/select-favorites/favorites-four"
import FavoritesFive from "@/components/select-favorites/favorites-five"
import FavoritesSix from "@/components/select-favorites/favorites-six"

import { queryKeys } from "@/constants"

export type SelectFavoritesComponentProps = {
  handleNext?: () => void
} & ComponentProps<typeof Stack>

export type SelectFavoritesComponent = (
  props: SelectFavoritesComponentProps
) => JSX.Element

const steps: SelectFavoritesComponent[] = [
  FavoritesOne,
  FavoritesTwo,
  FavoritesThree,
  FavoritesFour,
  FavoritesFive,
  FavoritesSix,
  FavoritesSeven,
  FavoritesEight,
]

const favoritesValidationSchema = Yup.object().shape({
  favorite: Yup.string().required("Campo obrigatório"),
  age: Yup.string().required("Campo obrigatório"),
  weight: Yup.string().required("Campo obrigatório"),
  goalWeight: Yup.string().required("Campo obrigatório"),
  height: Yup.string().required("Campo obrigatório"),
  fitnessLevel: Yup.string()
    .oneOf(["beginner", "intermediate", "advanced"], "Nível de condicionamento inválido")
    .required("Campo obrigatório"),
  goal: Yup.string()
    .oneOf(["improve-fitness", "weight-loss", "muscle-gain"], "Objetivo inválido")
    .required("Campo obrigatório"),
})

export type FavoritesProps = Yup.InferType<typeof favoritesValidationSchema>

export default function page() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [activeStep, setActiveStep] = useState(0)
  const { userId, email } = useCurrentUser()
  const { showToast } = useToast()

  const Component = steps[activeStep]

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const addFavoritesMutation = useMutation({
    mutationFn: async (values: FormikValues) => {
      values.userId = userId

      const request: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }

      try {
        const response = await fetch("/api/profile/create", request)
        const data = await response.json()

        if (!response.ok) throw new Error(data.message)

        return data.profile as Profile
      } catch (error) {
        if (error instanceof Error) {
          showToast("Perfil", error.message, "error")

          throw new Error(error.message)
        }
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [queryKeys.user, email],
      })

      showToast("Perfil", "Perfil criado com sucesso", "success")

      router.push("/inicio")
    },
  })

  async function onSubmit(values: FormikValues, { setSubmitting }: FormikHelpers<any>) {
    await addFavoritesMutation.mutateAsync(values, {
      onSettled: () => {
        setSubmitting(false)
      },
    })
  }

  return (
    <Stack px={3} pb={3} pt={3.75} gap={1} position="relative">
      <Header
        position="sticky"
        top={30}
        sx={{ backdropFilter: "blur(10px)", borderRadius: 9999 }}
        components={{
          left: (
            <IconButton
              onClick={activeStep === 0 ? () => router.back() : handleBack}
              sx={{ alignSelf: "flex-start" }}
            >
              {icons["arrow-back"]({
                sx: (theme) => ({ fill: theme.palette.black_19.main }),
              })}
            </IconButton>
          ),
          right:
            activeStep === steps.length - 1 ? null : (
              <Button
                LinkComponent={Link}
                href="/inicio"
                variant="text"
                sx={(theme) => ({
                  ...theme.typography.montserrat_body1,
                  color: "text.primary",
                  borderRadius: 1,
                  fontWeight: 700,
                })}
              >
                Pular
              </Button>
            ),
        }}
      />

      <Typography variant="dm_sans_body1" color="black_19.main" mb={0.25}>
        Passo {activeStep + 1} de {steps.length}
      </Typography>

      <Formik
        initialValues={{
          favorite: "",
          age: "25",
          weight: "",
          goalWeight: "",
          height: "",
          fitnessLevel: "beginner",
          goal: "improve-fitness",
          userId,
        }}
        onSubmit={onSubmit}
        validationSchema={favoritesValidationSchema}
      >
        <FavoritesLayout
          isLastStep={activeStep === steps.length - 1}
          handleNext={handleNext}
        >
          <Component handleNext={handleNext} />
        </FavoritesLayout>
      </Formik>
    </Stack>
  )
}
