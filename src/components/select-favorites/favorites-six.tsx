"use client"

import { useFormikContext } from "formik"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid2 from "@mui/material/Grid2"

import { type SelectFavoritesComponentProps } from "@/app/select-favorites/page"

const fitnessLevels = [
  {
    title: "Iniciante",
    image: "/images/favorites/beginner.webp",
    value: "beginner",
  },
  {
    title: "Intermediário",
    image: "/images/favorites/intermediate.webp",
    value: "intermediate",
  },
  {
    title: "Avançado",
    image: "/images/favorites/advanced.webp",
    value: "advanced",
  },
]

export default function FavoritesSix({
  handleNext,
  ...props
}: SelectFavoritesComponentProps) {
  const formik = useFormikContext<Record<string, any>>()

  return (
    <Grid2 container spacing={10.75} {...props} position="relative">
      <Grid2 size={12}>
        <Typography variant="bebas_neue_h2" color="black_19.main">
          Qual é seu nível de condicionamento físico?
        </Typography>
      </Grid2>

      <Grid2 size={12}>
        <Stack component="ul" gap={3.75} sx={{ p: 0, m: 0 }}>
          {fitnessLevels.map((fitnessLevel) => (
            <Button
              key={fitnessLevel.value}
              variant={
                formik.values.fitnessLevel === fitnessLevel.value
                  ? "contained"
                  : "outlined"
              }
              onClick={() => formik.setFieldValue("fitnessLevel", fitnessLevel.value)}
              sx={(theme) => ({
                borderColor:
                  formik.values.fitnessLevel === fitnessLevel.value
                    ? "text.primary"
                    : "divider",
                bgcolor:
                  formik.values.fitnessLevel === fitnessLevel.value
                    ? "text.primary"
                    : "transparent",
                textTransform: "uppercase",
                ...theme.typography.montserrat_body1,
                fontWeight: 600,
                color:
                  formik.values.fitnessLevel === fitnessLevel.value
                    ? "common.white"
                    : theme.palette.black_19.main,
                height: 54,
                borderRadius: 1,
              })}
            >
              {fitnessLevel.title}
            </Button>
          ))}
        </Stack>
      </Grid2>
    </Grid2>
  )
}
