"use client"

import { ComponentProps } from "react"

import { styled } from "@mui/material"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid2 from "@mui/material/Grid2"
import SvgIcon from "@mui/material/SvgIcon"
import Link from "next/link"

import MUIImage from "@/components/mui-image"

const categories = [
  {
    label: "Yoga",
    value: "yoga",
    image: "/images/start/categories/yoga.webp",
  },
  {
    label: "Academia",
    value: "gym",
    image: "/images/start/categories/wgym.webp",
  },
  {
    label: "Cardio",
    value: "cardio",
    image: "/images/start/categories/cardio.webp",
  },
  {
    label: "Alongamento",
    value: "stretching",
    image: "/images/start/categories/stretching.webp",
  },
  {
    label: "Corpo Inteiro",
    value: "full-body",
    image: "/images/start/categories/full-body.webp",
  },
]

export default function Categories({ ...props }: ComponentProps<typeof Stack>) {
  return (
    <Stack width="100%" {...props}>
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        <Typography variant="bebas_neue_h2" fontSize={18} color="black_19.main">
          Categoria
        </Typography>

        <Button
          variant="text"
          LinkComponent={Link}
          href="/categorias"
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

      <Stack
        component="ul"
        direction="row"
        alignItems="center"
        gap={1.75}
        sx={{ p: 0, m: 0, listStyle: "none", overflowX: "auto" }}
      >
        {categories.map((category) => (
          <li key={category.value}>
            <Stack
              {...props}
              width={61}
              gap={1.25}
              alignItems="center"
              overflow="hidden"
              sx={{ cursor: "pointer" }}
            >
              <Stack
                position="relative"
                width={61}
                height={61}
                borderRadius={9999}
                overflow="hidden"
                sx={{ outline: "1px solid", outlineColor: "text.primary" }}
              >
                <MUIImage src={category.image} alt={category.label} fill priority />
              </Stack>

              <Typography
                variant="montserrat_body1"
                fontSize={12}
                width="100%"
                fontWeight={600}
                align="center"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {category.label}
              </Typography>
            </Stack>
          </li>
        ))}
      </Stack>
    </Stack>
  )
}
