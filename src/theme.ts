"use client"

import { Montserrat, Bebas_Neue, DM_Sans } from "next/font/google"

import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material/styles"

import { css } from "@mui/material/styles"

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const bebas_neue = Bebas_Neue({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-bebasneue",
})

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dmsans",
})

const screen = css`
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  margin: 0;
  min-height: 100vh;
  max-width: 100% !important;
`

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: "light",
    green_primary: {
      main: "#B0C929",
    },
    black_19: {
      main: "#191919",
    },
  },
  typography: {
    fontFamily: [
      montserrat.style.fontFamily,
      bebas_neue.style.fontFamily,
      dm_sans.style.fontFamily,
    ].join(","),
    bebas_neue_h2: {
      fontFamily: bebas_neue.style.fontFamily,
      fontSize: 30,
      fontWeight: 400,
    },
    dm_sans_h6: {
      fontFamily: dm_sans.style.fontFamily,
      fontSize: 15,
      fontWeight: 500,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        component: "main",
      },
      styleOverrides: {
        root: screen,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        html: {
          a: {
            textDecoration: "none",
            color: "inherit",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
          },
          [theme.breakpoints.between("sm", "md")]: {
            fontSize: "15px",
          },
          [theme.breakpoints.between("md", "lg")]: {
            fontSize: "16px",
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: "16px",
          },
        },
      }),
    },
  },
})

declare module "@mui/material/styles" {
  interface Palette {
    green_primary: PaletteColor
    black_19: PaletteColor
  }

  interface PaletteOptions {
    green_primary: PaletteColorOptions
    black_19: PaletteColorOptions
  }

  interface TypographyVariants {
    bebas_neue_h2: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    bebas_neue_h2: React.CSSProperties
  }

  interface TypographyVariants {
    dm_sans_h6: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    dm_sans_h6: React.CSSProperties
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bebas_neue_h2: true
  }

  interface TypographyPropsVariantOverrides {
    dm_sans_h6: true
  }
}

export const fontVariants = [
  montserrat.variable,
  bebas_neue.variable,
  dm_sans.variable,
].join(" ")

export default theme
