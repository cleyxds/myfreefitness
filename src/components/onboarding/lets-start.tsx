import Link from "next/link"

import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

export default function LetsStart() {
  return (
    <Stack component="main" minHeight="100dvh">
      <Stack flex={0.8}>
        <Stack flex={1} />
      </Stack>

      <Stack flex={0.2} alignItems="center" gap={4}>
        <Stack gap={1} alignItems="center">
          <Typography
            fontFamily="var(--font-bebasneue)"
            fontWeight={400}
            fontSize={48}
            color="common.black"
          >
            Pro&nbsp;
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
            We train your body to be great and fit.
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
          Let’s Start
        </Button>
      </Stack>
    </Stack>
  )
}
