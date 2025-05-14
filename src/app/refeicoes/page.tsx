"use client"

import { ComponentProps } from "react"

import { styled } from "@mui/material"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid2 from "@mui/material/Grid2"
import SvgIcon from "@mui/material/SvgIcon"
import IconButton from "@mui/material/IconButton"

import HeaderTabsLayout from "@/components/tabs-layout"

import { icons } from "@/components/header"

export default function page() {
  return (
    <HeaderTabsLayout
      header={{
        components: {
          left: (
            <IconButton sx={{ alignSelf: "flex-start" }}>
              {icons["arrow-back"]({
                sx: (theme) => ({ fill: theme.palette.black_19.main }),
              })}
            </IconButton>
          ),
          middle: (
            <Typography variant="bebas_neue_h2" color="black_19.main" align="center">
              Refeições
            </Typography>
          ),
          right: (
            <IconButton sx={{ alignSelf: "flex-end" }}>
              {icons["filter-bin"]({})}
            </IconButton>
          ),
        },
      }}
      px={2.625}
      pt={3.75}
    >
      <Stack />
    </HeaderTabsLayout>
  )
}
