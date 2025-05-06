"use client"

import { createContext, ReactNode, SyntheticEvent, useContext, useState } from "react"

import Alert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"

type Colors = "success" | "error" | "warning" | "info"

type ToastContextProps = {
  showToast: (title: string, description: string, color: Colors) => void
}

export const ToastContext = createContext<ToastContextProps>({
  showToast: () => {},
})

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [color, setColor] = useState<Colors>("info")

  const showToast = (
    title: string,
    description: string,
    color: "success" | "error" | "warning" | "info"
  ) => {
    setTitle(title)
    setDescription(description)
    setColor(color)
    setOpenSnackbar(true)
  }

  const handleCloseSnackbar = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return

    setOpenSnackbar(false)
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
      }}
    >
      {children}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={color} sx={{ width: "100%" }}>
          <strong>{title}</strong>

          {description && <div>{description}</div>}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider")
  }

  return context
}
