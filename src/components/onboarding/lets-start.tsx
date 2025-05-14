import Link from "next/link"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import SvgIcon from "@mui/material/SvgIcon"

import MUIImage from "@/components/mui-image"

export default function LetsStart() {
  return (
    <Stack component="main" minHeight="100dvh" gap={2}>
      <Stack position="relative" justifyContent="center" alignItems="center" flex={0.8}>
        <Stack position="relative" width={297} height={349}>
          <MUIImage
            src="/images/infographs/lets-start.webp"
            alt="Vamos começar"
            fill
            priority
          />
        </Stack>

        <Stack position="absolute" top={0} left={0} right={0} zIndex={-1}>
          <SvgIcon sx={{ width: 338, height: 338 }}>
            <svg
              width="360"
              height="440"
              viewBox="0 0 360 440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5" filter="url(#filter0_f_212_822)">
                <circle cx="89" cy="71" r="169" fill="#B0C929" />
              </g>
              <defs>
                <filter
                  id="filter0_f_212_822"
                  x="-280"
                  y="-298"
                  width="738"
                  height="738"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="100"
                    result="effect1_foregroundBlur_212_822"
                  />
                </filter>
              </defs>
            </svg>
          </SvgIcon>
        </Stack>

        <Stack position="absolute" bottom={50} left={25} right={0} zIndex={-1}>
          <SvgIcon sx={{ width: 179, height: 158 }}>
            <svg
              width="171"
              height="159"
              viewBox="0 0 171 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M160.258 0.826904H66.4903C62.412 0.826904 58.7423 3.30351 57.2165 7.08562L1.54361 145.086C-1.10794 151.658 3.73013 158.827 10.8174 158.827H105.348C109.444 158.827 113.125 156.329 114.64 152.524L169.55 14.524C172.163 7.95778 167.325 0.826904 160.258 0.826904Z"
                fill="#B0C929"
              />
            </svg>
          </SvgIcon>
        </Stack>

        <Stack position="absolute" bottom={50} right={22} zIndex={-1}>
          <SvgIcon sx={{ width: 169, height: 162 }}>
            <svg
              width="169"
              height="162"
              viewBox="0 0 169 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="84.5" cy="81.3269" rx="84.5" ry="80.5" fill="#FF805E" />
            </svg>
          </SvgIcon>
        </Stack>

        <Stack position="absolute" top={80} right={40} zIndex={-1}>
          <SvgIcon sx={{ width: 179, height: 158 }}>
            <svg
              width="171"
              height="159"
              viewBox="0 0 171 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M160.258 0.826904H66.4903C62.412 0.826904 58.7423 3.30351 57.2165 7.08562L1.54361 145.086C-1.10794 151.658 3.73013 158.827 10.8174 158.827H105.348C109.444 158.827 113.125 156.329 114.64 152.524L169.55 14.524C172.163 7.95778 167.325 0.826904 160.258 0.826904Z"
                fill="#FBBC05"
              />
            </svg>
          </SvgIcon>
        </Stack>
      </Stack>

      <Stack flex={0.2} alignItems="center" gap={4}>
        <Stack gap={1} alignItems="center">
          <Typography
            fontFamily="var(--font-bebasneue)"
            fontWeight={400}
            fontSize={48}
            color="common.black"
          >
            Myfree
            <Typography
              fontFamily="var(--font-bebasneue)"
              fontWeight={400}
              fontSize={48}
              color="green_primary.main"
              component="span"
            >
              Fitness
            </Typography>
          </Typography>

          <Typography
            fontFamily="var(--font-dmsans)"
            fontWeight={400}
            fontSize={16}
            letterSpacing="-0.5px"
            color="common.black"
          >
            Treine seu corpo para ficar ótimo e em forma.
          </Typography>
        </Stack>

        <Button
          LinkComponent={Link}
          href="/onboarding/carousel"
          sx={{
            bgcolor: "black_19.main",
            textTransform: "uppercase",
            fontFamily: "var(--font-bebasneue)",
            fontSize: 20,
            fontWeight: 400,
            lineHeight: 1.25,
            letterSpacing: "0.5px",
            color: "common.white",
            minWidth: "11.25rem",
            minHeight: "3.5rem",
            borderRadius: 0.5,
          }}
        >
          Vamos começar
        </Button>
      </Stack>
    </Stack>
  )
}
