"use client"

import { ComponentProps, useState } from "react"

import { styled } from "@mui/material"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import MUIChip from "@mui/material/Chip"

const goals = [
  {
    label: "Perder Peso",
    value: "lose-weight",
  },
  {
    label: "Ganhar Peso",
    value: "gain-weight",
  },
  {
    label: "Fisiculturismo",
    value: "bodybuilding",
  },
  {
    label: "Saudável",
    value: "healthy",
  },
]

export default function SelectGoal({ ...props }: ComponentProps<typeof Stack>) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <Stack gap={2} width="100%" {...props}>
      <Typography variant="bebas_neue_h2" fontSize={18} color="black_19.main">
        Selecione seu objetivo
      </Typography>

      <Stack
        component="ul"
        direction="row"
        alignItems="center"
        gap={1.625}
        sx={{ p: 0, m: 0, listStyle: "none", overflowX: "auto" }}
      >
        {goals.map((goal) => (
          <li key={goal.value}>
            <Chip
              label={goal.label}
              size="medium"
              variant="outlined"
              isSelected={selected === goal.value}
              onClick={() => setSelected(goal.value)}
            />
          </li>
        ))}
      </Stack>
    </Stack>
  )
}

const Chip = styled(MUIChip)<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
  border: 0,
  borderRadius: 8,
  backgroundColor: isSelected ? theme.palette.text.primary : theme.palette.divider,
  cursor: "pointer",
  color: isSelected ? theme.palette.background.default : theme.palette.black_19[300],

  "&:hover": {
    backgroundColor: isSelected
      ? theme.palette.black_19[300]
      : theme.palette.text.primary,
  },
}))
