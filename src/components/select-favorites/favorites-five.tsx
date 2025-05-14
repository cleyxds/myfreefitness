"use client"

import { useState } from "react"

import { useFormikContext } from "formik"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Grid2 from "@mui/material/Grid2"
import Button from "@mui/material/Button"
import InputAdornment from "@mui/material/InputAdornment"

import FormInput from "@/components/form-input"

import { type SelectFavoritesComponentProps } from "@/app/select-favorites/page"

import { numberInputMask } from "@/utils/input-masks"

export default function FavoritesFive({
  handleNext,
  ...props
}: SelectFavoritesComponentProps) {
  const formik = useFormikContext<Record<string, any>>()

  const [unit, setUnit] = useState("CM")

  return (
    <Grid2 container spacing={10.75} {...props}>
      <Grid2 size={12}>
        <Typography variant="bebas_neue_h2" color="black_19.main">
          Qual é a sua altura?
        </Typography>
      </Grid2>

      <Grid2 size={12}>
        <Stack justifyContent="center" alignItems="center" gap={3}>
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="divider"
            minWidth={120}
            p={0.5}
            boxShadow={(theme) => theme.shadows[1]}
            borderRadius={2}
          >
            <Button
              variant={unit === "FEET" ? "contained" : "text"}
              onClick={() => setUnit("FEET")}
              sx={{
                color: unit === "FEET" ? "background.default" : "text.primary",
                bgcolor: unit === "FEET" ? "text.primary" : "transparent",
              }}
            >
              FEET
            </Button>

            <Button
              variant={unit === "CM" ? "contained" : "text"}
              onClick={() => setUnit("CM")}
              sx={{
                color: unit === "CM" ? "background.default" : "text.primary",
                bgcolor: unit === "CM" ? "text.primary" : "transparent",
              }}
            >
              CM
            </Button>
          </Stack>

          <FormInput
            placeholder="Altura"
            type="text"
            value={formik.values.height}
            onChange={(event) => {
              const weightInput = numberInputMask(event)

              formik.setFieldValue("height", weightInput.target.value)
            }}
            slotProps={{
              htmlInput: { maxLength: 3 },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography
                      variant="montserrat_body1"
                      fontSize={22}
                      fontWeight={500}
                      color="black_19.main"
                    >
                      {unit}
                    </Typography>
                  </InputAdornment>
                ),
              },
            }}
            sx={{ width: { xs: "100%", md: "unset", lg: "unset" } }}
          />
        </Stack>
      </Grid2>
    </Grid2>
  )
}
