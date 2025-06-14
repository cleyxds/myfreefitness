import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import MUIImage from "@/components/mui-image"

export default function OnboardingTwo() {
  return (
    <Stack component="main">
      <Stack flex={0.8}>
        <Stack position="relative" width={370.17} height={361.7} flex={1}>
          <MUIImage
            src="/images/infographs/onboarding-two.webp"
            alt="Corpo perfeito"
            fill
            priority
          />
        </Stack>
      </Stack>

      <Stack flex={0.2} alignItems="center" gap={4}>
        <Stack gap={1} textAlign="center" px={6}>
          <Typography
            fontFamily="var(--font-bebasneue)"
            fontWeight="400"
            fontSize={48}
            color="common.black"
          >
            Shot strong
            <br />
            <Typography
              fontFamily="var(--font-bebasneue)"
              fontWeight={400}
              fontSize={48}
              color="green_primary.main"
              component="span"
            >
              Timeless
            </Typography>
            <br />
            Woman training
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
