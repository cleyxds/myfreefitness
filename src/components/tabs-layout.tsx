import { ComponentProps } from "react"

import Stack from "@mui/material/Stack"

import Header from "@/components/header"
import Tabs from "@/components/tabs"

export default function HeaderTabsLayout({
  children,
  header,
  ...props
}: {
  children: React.ReactNode
  header?: ComponentProps<typeof Header>
} & ComponentProps<typeof Stack>) {
  return (
    <Stack component="main" {...props}>
      <Header {...header} children={header?.children} />

      {children}

      <Tabs />
    </Stack>
  )
}
