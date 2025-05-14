"use client"

import { ComponentProps } from "react"

import Link from "next/link"

import { useMutation, UseMutationResult } from "@tanstack/react-query"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid2 from "@mui/material/Grid2"
import SvgIcon from "@mui/material/SvgIcon"
import IconButton from "@mui/material/IconButton"

import MUIImage from "@/components/mui-image"

import { fitnessLevelMapping } from "@/utils/mappings"

export default function PopularExercises({
  exercises = [],
  ...props
}: {
  exercises?: Exercise[]
} & ComponentProps<typeof Stack>) {
  if (!exercises.length) return null

  const onFavoriteMutation = useMutation({
    mutationFn: async (exerciseId: string) => {
      console.log(`Favoritar exercício ${exerciseId}`)
    },
  })

  return (
    <Stack gap={2} {...props}>
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        <Typography variant="bebas_neue_h2" fontSize={18} color="black_19.main">
          Exercícios Populares
        </Typography>

        <Button
          variant="text"
          LinkComponent={Link}
          href="/exercicios"
          sx={(theme) => ({
            ...theme.typography.montserrat_body1,
            color: "text.primary",
            borderRadius: 1,
            fontWeight: 700,
          })}
        >
          Ver tudo
        </Button>
      </Stack>

      <Grid2 container spacing={2.5}>
        {exercises.map((exercise) => (
          <PopularExercisesCard
            key={exercise.id}
            onFavoriteExercise={onFavoriteMutation}
            exercise={exercise}
          />
        ))}
      </Grid2>
    </Stack>
  )
}

function PopularExercisesCard({
  exercise,
  favorite,
  onFavoriteExercise,
}: {
  exercise: Exercise
  favorite?: boolean
  onFavoriteExercise?: UseMutationResult<void, Error, string, unknown>
}) {
  return (
    <Grid2 component={Link} href={`/exercicio/${exercise.slug}`} size={{ xs: 12, lg: 6 }}>
      <Stack width="100%" gap={2}>
        <Stack mx={1.35} position="relative">
          <Stack
            width="100%"
            height={155}
            overflow="hidden"
            borderRadius={1.25}
            boxShadow={2}
          >
            <MUIImage src={exercise.banner} alt={exercise.title} fill priority />
          </Stack>

          <Stack position="absolute" top={8} right={8}>
            <IconButton
              loading={onFavoriteExercise?.isPending}
              disabled={onFavoriteExercise?.isPending}
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()

                onFavoriteExercise?.mutate(exercise.id)
              }}
            >
              <SvgIcon sx={{ color: favorite ? "error.main" : "disabled" }}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.864 1.86401C10.5702 1.54385 10.2126 1.28882 9.81423 1.11537C9.41583 0.941923 8.9855 0.853911 8.551 0.857013C7.89177 0.854017 7.25109 1.0751 6.734 1.48401C6.45389 1.70324 6.20671 1.96154 6 2.25101C5.79331 1.96153 5.54612 1.70322 5.266 1.48401C4.74891 1.0751 4.10823 0.854017 3.449 0.857013C3.01466 0.854052 2.58453 0.942131 2.18632 1.11557C1.7881 1.28902 1.43065 1.54397 1.137 1.86401C0.531757 2.54171 0.203997 3.42252 0.218999 4.33101C0.245379 5.37839 0.653247 6.38011 1.366 7.14801C2.24871 8.12168 3.20849 9.0226 4.236 9.84201C4.636 10.181 5.085 10.565 5.553 10.974C5.67676 11.0822 5.83559 11.1419 6 11.1419C6.16441 11.1419 6.32324 11.0822 6.447 10.974C6.915 10.565 7.366 10.18 7.764 9.84101C8.79155 9.02165 9.75133 8.12072 10.634 7.14701C11.3468 6.37911 11.7546 5.37739 11.781 4.33001C11.7966 3.42129 11.4692 2.54006 10.864 1.86201V1.86401Z"
                    fill="currentColor"
                  />
                </svg>
              </SvgIcon>
            </IconButton>
          </Stack>
        </Stack>

        <Stack gap={1}>
          <Typography
            variant="montserrat_body1"
            color="black_19.main"
            fontWeight={600}
            fontSize={12}
          >
            {exercise.title}
          </Typography>

          <Typography
            variant="montserrat_body1"
            color="black_19.300"
            fontWeight={500}
            fontSize={10}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {fitnessLevelMapping[
              exercise?.fitnessLevel as keyof typeof fitnessLevelMapping
            ]?.title ?? exercise.fitnessLevel}
            &nbsp;|&nbsp;&nbsp;
            <SvgIcon sx={{ width: 12, height: 12 }}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.521 11.043C4.42909 11.043 3.36171 10.7192 2.4538 10.1126C1.5459 9.50598 0.83826 8.64378 0.420359 7.635C0.00245842 6.62623 -0.106934 5.51619 0.106014 4.44525C0.318962 3.37431 0.844687 2.39056 1.61671 1.6184C2.38874 0.846231 3.37239 0.320327 4.4433 0.107185C5.5142 -0.105956 6.62426 0.0032351 7.6331 0.420953C8.64195 0.838671 9.50428 1.54616 10.1111 2.45395C10.7178 3.36174 11.0418 4.42907 11.042 5.52098C11.0407 6.98493 10.4586 8.38855 9.42354 9.42381C8.38846 10.4591 6.98495 11.0414 5.521 11.043ZM5.521 0.630979C4.55385 0.630979 3.60842 0.917773 2.80426 1.45509C2.00011 1.99241 1.37334 2.75613 1.00323 3.64966C0.633119 4.54319 0.536281 5.5264 0.724962 6.47497C0.913644 7.42354 1.37937 8.29485 2.06325 8.97873C2.74713 9.66261 3.61844 10.1283 4.56701 10.317C5.51558 10.5057 6.49879 10.4089 7.39232 10.0387C8.28586 9.66864 9.04957 9.04187 9.58689 8.23772C10.1242 7.43356 10.411 6.48813 10.411 5.52098C10.4084 4.22488 9.89232 2.98263 8.97584 2.06615C8.05935 1.14966 6.8171 0.633621 5.521 0.630979Z"
                  fill="#00ADB5"
                />
                <path
                  d="M7.21505 7.52998C7.17365 7.5301 7.13264 7.52204 7.09437 7.50625C7.0561 7.49046 7.02132 7.46726 6.99205 7.43798L5.29806 5.74498C5.26882 5.71567 5.24565 5.6809 5.22986 5.64263C5.21408 5.60437 5.20599 5.56337 5.20606 5.52198V1.93898C5.21059 1.85837 5.24581 1.78256 5.30448 1.7271C5.36315 1.67165 5.44082 1.64075 5.52156 1.64075C5.60229 1.64075 5.67996 1.67165 5.73863 1.7271C5.7973 1.78256 5.83251 1.85837 5.83705 1.93898V5.39098L7.43705 6.99098C7.48107 7.03517 7.51102 7.09139 7.52314 7.15257C7.53526 7.21375 7.52901 7.27715 7.50516 7.33479C7.48132 7.39242 7.44095 7.44171 7.38915 7.47644C7.33735 7.51117 7.27642 7.5298 7.21405 7.52998H7.21505Z"
                  fill="#00ADB5"
                />
              </svg>
            </SvgIcon>
            &nbsp; 30 min
          </Typography>
        </Stack>
      </Stack>
    </Grid2>
  )
}
