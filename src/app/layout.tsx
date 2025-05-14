import type { Metadata } from "next"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import theme, { fontVariants } from "@/theme"

import DataRoot from "@/components/data-root"

export const metadata: Metadata = {
  title: "Myfreefitness",
  description:
    "Myfreefitness é um aplicativo de fitness gratuito, que ajuda você a alcançar seus objetivos de saúde e condicionamento físico.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontVariants}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <DataRoot>
            <ThemeProvider theme={theme}>
              <CssBaseline />

              {children}
            </ThemeProvider>
          </DataRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
