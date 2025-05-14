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

import { priceInputMask } from "@/utils/input-masks"

export default function FavoritesFour({
  handleNext,
  ...props
}: SelectFavoritesComponentProps) {
  const formik = useFormikContext<Record<string, any>>()

  const [unit, setUnit] = useState("KG")

  return (
    <Grid2 container spacing={10.75} {...props}>
      <Grid2 size={12}>
        <Typography variant="bebas_neue_h2" color="black_19.main">
          Qual é sua meta de peso?
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
              variant={unit === "LBS" ? "contained" : "text"}
              onClick={() => setUnit("LBS")}
              sx={{
                color: unit === "LBS" ? "background.default" : "text.primary",
                bgcolor: unit === "LBS" ? "text.primary" : "transparent",
              }}
            >
              LBS
            </Button>

            <Button
              variant={unit === "KG" ? "contained" : "text"}
              onClick={() => setUnit("KG")}
              sx={{
                color: unit === "KG" ? "background.default" : "text.primary",
                bgcolor: unit === "KG" ? "text.primary" : "transparent",
              }}
            >
              KG
            </Button>
          </Stack>

          <FormInput
            placeholder="Peso"
            type="text"
            value={formik.values.goalWeight}
            onChange={(event) => {
              const weightInput = priceInputMask(event)

              formik.setFieldValue("goalWeight", weightInput.target.value)
            }}
            slotProps={{
              htmlInput: { maxLength: 6 },
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
