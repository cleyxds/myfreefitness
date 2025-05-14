"use client"

import { Montserrat, Bebas_Neue, DM_Sans } from "next/font/google"

import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material/styles"

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
      "300": "#3A4750",
    },
    orange_primary: {
      light: "#FABC06",
      main: "#F6A010",
      dark: "#D48103",
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
    dm_sans_body1: {
      fontFamily: dm_sans.style.fontFamily,
      fontSize: 14,
      fontWeight: 500,
    },
    montserrat_body1: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: 14,
      fontWeight: 500,
    },
  },
  components: {
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
    green_primary: {
      main: string
    }
    black_19: {
      main: string
      300: string
    }
    orange_primary: {
      light: string
      main: string
      dark: string
    }
  }

  interface PaletteOptions {
    green_primary: PaletteColorOptions
    black_19: PaletteColorOptions
    orange_primary: PaletteColorOptions
  }

  interface TypographyVariants {
    bebas_neue_h2: React.CSSProperties
    dm_sans_h6: React.CSSProperties
    dm_sans_body1: React.CSSProperties
    montserrat_body1: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    bebas_neue_h2: React.CSSProperties
    dm_sans_h6: React.CSSProperties
    dm_sans_body1: React.CSSProperties
    montserrat_body1: React.CSSProperties
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bebas_neue_h2: true
    dm_sans_h6: true
    dm_sans_body1: true
    montserrat_body1: true
  }
}

export const fontVariants = [
  montserrat.variable,
  bebas_neue.variable,
  dm_sans.variable,
].join(" ")

export default theme
