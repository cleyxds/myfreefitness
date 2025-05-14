"use client"

import { useFormikContext } from "formik"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Grid2 from "@mui/material/Grid2"

import { type SelectFavoritesComponentProps } from "@/app/select-favorites/page"

export default function FavoritesTwo({
  handleNext,
  ...props
}: SelectFavoritesComponentProps) {
  const formik = useFormikContext<Record<string, any>>()

  return (
    <Grid2 container spacing={12.75} {...props}>
      <Grid2 size={12}>
        <Typography variant="bebas_neue_h2" color="black_19.main">
          Qual sua idade?
        </Typography>
      </Grid2>

      <Grid2 size={12}>
        <Stack justifyContent="center" alignItems="center">
          <Stack width={70} height={294} bgcolor="green_primary.main"></Stack>
        </Stack>
      </Grid2>
    </Grid2>
  )
}
