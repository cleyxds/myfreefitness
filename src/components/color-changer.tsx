"use client"

import { useColorScheme } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import FormControlLabel from "@mui/material/FormControlLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"

export default function ColorChanger() {
  const theme = useColorScheme()

  return (
    <FormControl>
      <FormLabel id="theme-toggle">Tema</FormLabel>

      <RadioGroup
        row
        aria-labelledby="theme-toggle"
        name="theme-toggle"
        value={theme.mode}
        onChange={(event) =>
          theme.setMode(event.target.value as "system" | "light" | "dark")
        }
      >
        <FormControlLabel value="system" control={<Radio />} label="System" />
        <FormControlLabel value="light" control={<Radio />} label="Light" />
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
      </RadioGroup>
    </FormControl>
  )
}
