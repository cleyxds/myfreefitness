import { ComponentProps } from "react"

import { styled } from "@mui/material"
import MUITextField from "@mui/material/TextField"

type FormInputProps = {}

export default function FormInput({
  ...props
}: FormInputProps & ComponentProps<typeof MUITextField>) {
  return <TextField {...props} />
}

const TextField = styled(MUITextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#F5F5F5",
    height: 54,
    fontSize: 14,
    fontWeight: 500,
    color: "#303841",

    "& fieldset": {
      borderColor: "#6969693f",
    },
    "&:hover fieldset": {
      borderColor: "#696969",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#696969",
    },
  },
}))
