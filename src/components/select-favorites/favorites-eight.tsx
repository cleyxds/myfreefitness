"use client"

import { useFormikContext } from "formik"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid2 from "@mui/material/Grid2"

import MUIImage from "@/components/mui-image"

import { type SelectFavoritesComponentProps } from "@/app/select-favorites/page"

export default function FavoritesEight({
  handleNext,
  ...props
}: SelectFavoritesComponentProps) {
  const formik = useFormikContext<Record<string, any>>()

  return (
    <Grid2 container spacing={10.75} mb={10} {...props}>
      <Grid2 size={12} justifyContent="center" alignItems="center">
        <Stack gap={1} alignItems="center" justifyContent="center">
          <Typography variant="bebas_neue_h2" color="black_19.main">
            Vamos começar!
          </Typography>

          <Typography variant="montserrat_body1" color="black_19.300" align="center">
            O trecho padrão do Lorem Ipsum
            <br />
            usado desde o século XVI é reproduzido abaixo
            <br />
            para os interessados.
          </Typography>

          <Stack mt={4} position="relative" width={240} height={240}>
            <MUIImage
              src="/images/select-favorites/favorite-eight.webp"
              alt="favorite-eight"
              fill
              priority
            />
          </Stack>

          <Stack mt={5.625}>
            <Typography
              variant="dm_sans_h6"
              fontSize={17}
              color="text.primary"
              align="center"
            >
              Esculpe seu&nbsp;
              <Typography
                component="span"
                variant="dm_sans_h6"
                fontSize={17}
                color="green_primary.main"
                align="center"
              >
                corpo ideal,&nbsp;
              </Typography>
              liberte seu
              <br />
              verdadeiro eu, transforme sua vida.
            </Typography>
          </Stack>
        </Stack>
      </Grid2>
    </Grid2>
  )
}
