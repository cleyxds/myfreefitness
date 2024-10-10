"use client"

import { Roboto } from "next/font/google"

import { createTheme } from "@mui/material/styles"

import { css } from "@mui/material/styles"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
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
  cssVariables: true,
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
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

export default theme
