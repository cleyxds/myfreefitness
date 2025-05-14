"use client"

import { ComponentProps } from "react"

import Link from "next/link"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import MUIImage from "@/components/mui-image"

export default function FitInfograph({ ...props }: ComponentProps<typeof Stack>) {
  return (
    <Stack
      position="relative"
      width="100%"
      height={160.45}
      borderRadius={1.25}
      p={3.4025}
      sx={(theme) => ({
        background: `linear-gradient(to right, ${theme.palette.orange_primary.main}, ${theme.palette.orange_primary.dark})`,
      })}
      {...props}
    >
      <Stack position="absolute" left={-33} top={-55}>
        <Stack position="relative" width={195} height={249}>
          <MUIImage
            src="/images/infographs/girl-stretching.webp"
            alt="Infográfico: garota alongando"
            fill
          />
        </Stack>
      </Stack>

      <Stack position="absolute" left={150} top={15}>
        <Stack position="relative" width={73.35} height={273.3549}>
          <MUIImage
            src="/images/infographs/dumbbell.webp"
            alt="Infográfico: halter"
            fill
            sx={{ objectFit: "contain" }}
          />
        </Stack>
      </Stack>

      <Stack gap={2} zIndex={1} alignItems="flex-end">
        <Typography
          variant="bebas_neue_h2"
          color="background.default"
          fontSize={17}
          mb={0.5}
          align="center"
        >
          Você em forma fazendo
          <br />
          treinamentos de alongamento
        </Typography>

        <Button
          LinkComponent={Link}
          href="/exercicio/alongamento"
          variant="contained"
          sx={(theme) => ({
            ...theme.typography.dm_sans_body1,
            bgcolor: theme.palette.orange_primary.light,
            height: 27.51,
            borderRadius: 1,
          })}
        >
          Começar exercício
        </Button>
      </Stack>
    </Stack>
  )
}
