import { SxProps, Theme } from "@mui/material"

export default function (name: string, avatarUrl?: string, sx_props?: SxProps<Theme>) {
  const avatarValue = stringAvatar(name)

  const avatarDisplayProp = avatarUrl
    ? {
        src: avatarUrl,
      }
    : {
        children: avatarValue.children,
      }

  return {
    ...avatarDisplayProp,
    sx: {
      ...sx_props,
      bgcolor: avatarValue.sx.bgcolor,
    },
  }
}

export function stringToColor(string: string) {
  let hash = 0
  let i
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }
  let color = "#"
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  return color
}

function validateName(name: string) {
  let value = ""

  const [firstName, lastName] = name?.split?.(" ")

  if (firstName && !!firstName.length) {
    value = firstName[0]
  }

  if (lastName && !!lastName.length) {
    value += lastName[0]
  }

  return value
}

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: validateName(name),
  }
}
