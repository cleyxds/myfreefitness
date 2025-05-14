"use client"

import { ComponentProps } from "react"

import { useFormikContext } from "formik"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Grid2 from "@mui/material/Grid2"

import MUIImage from "@/components/mui-image"

import { type SelectFavoritesComponentProps } from "@/app/select-favorites/page"

const favorites = [
  {
    title: "Corrida",
    image: "/images/favorites/running.webp",
    value: "running",
  },
  {
    title: "Caminhada",
    image: "/images/favorites/walking.webp",
    value: "walking",
  },
  {
    title: "Plano de refeições",
    image: "/images/favorites/meal-plan.webp",
    value: "weightlifting",
  },
  {
    title: "Ciclismo",
    image: "/images/favorites/cycling.webp",
    value: "yoga",
  },
  {
    title: "Yoga",
    image: "/images/favorites/yoga.png",
    value: "yoga",
  },
  {
    title: "Health",
    image: "/images/favorites/health.png",
    value: "health",
  },
]

export default function FavoritesOne({
  handleNext,
  ...props
}: SelectFavoritesComponentProps) {
  const formik = useFormikContext<Record<string, any>>()

  return (
    <Grid2 container spacing={6.25} mb={14.75} {...props}>
      <Grid2 size={12}>
        <Typography variant="bebas_neue_h2" color="black_19.main">
          Selecione seus favoritos
        </Typography>
      </Grid2>

      <Grid2 size={12}>
        <Grid2 container rowSpacing={7.125} columnSpacing={1.625}>
          {favorites.map((item) => (
            <Grid2 key={item.value} size={6}>
              <Card
                title={item.title}
                image={item.image}
                onClick={() => formik.setFieldValue("favorite", item.value)}
              />
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

function Card({
  title,
  image = "",
  ...props
}: { title: string; image?: string } & ComponentProps<typeof Stack>) {
  return (
    <Stack {...props} gap={1.5} alignItems="center" sx={{ cursor: "pointer" }}>
      <Stack
        position="relative"
        width={112}
        height={112}
        borderRadius={9999}
        overflow="hidden"
        sx={{ outline: "1px solid", outlineColor: "text.primary" }}
      >
        <MUIImage src={image} alt={title} fill priority />
      </Stack>

      <Typography variant="dm_sans_h6" fontWeight={700}>
        {title}
      </Typography>
    </Stack>
  )
}
