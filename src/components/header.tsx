"use client"

import React, { ComponentProps } from "react"

import Stack from "@mui/material/Stack"
import SvgIcon from "@mui/material/SvgIcon"

export const icons = {
  "arrow-back": (props: ComponentProps<typeof SvgIcon>) => (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
      </svg>
    </SvgIcon>
  ),
  "filter-bin": (props: ComponentProps<typeof SvgIcon>) => (
    <SvgIcon {...props}>
      <svg
        width="17"
        height="19"
        viewBox="0 0 17 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.617 8.366C12.6857 8.366 15.984 6.71706 15.984 4.683C15.984 2.64894 12.6857 1 8.617 1C4.54832 1 1.25 2.64894 1.25 4.683C1.25 6.71706 4.54832 8.366 8.617 8.366Z"
          stroke="#303841"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.25 4.68311C1.26295 6.32048 1.83026 7.90517 2.85941 9.17876C3.88856 10.4523 5.31883 11.3397 6.917 11.6961V16.3351C6.917 16.786 7.09611 17.2184 7.41492 17.5372C7.73373 17.856 8.16613 18.0351 8.617 18.0351C9.06787 18.0351 9.50027 17.856 9.81908 17.5372C10.1379 17.2184 10.317 16.786 10.317 16.3351V11.6961C11.915 11.3395 13.345 10.4521 14.374 9.17849C15.4029 7.90493 15.9701 6.32034 15.983 4.68311"
          stroke="#303841"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  ),
} as const

type HeaderProps = {
  components?: {
    left?: string | React.ReactNode | any
    middle?: string | React.ReactNode | any
    right?: string | React.ReactNode | any
  }
}

export default function Header({
  components: { left, middle, right } = {},
  ...props
}: ComponentProps<typeof Stack> & HeaderProps) {
  return (
    <Stack
      {...props}
      component="header"
      height={props.children ? "unset" : 48}
      direction="row"
      alignItems="center"
      gap={1}
    >
      {props.children ? (
        props.children
      ) : (
        <>
          <Stack alignItems="flex-start" flex={1}>
            {left}
          </Stack>

          <Stack alignItems="center" flex={1}>
            {middle}
          </Stack>

          <Stack alignItems="flex-end" flex={1}>
            {right}
          </Stack>
        </>
      )}
    </Stack>
  )
}
