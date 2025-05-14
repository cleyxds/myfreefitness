import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import SvgIcon from "@mui/material/SvgIcon"

import MUIImage from "@/components/mui-image"

export default function OnboardingOne() {
  return (
    <Stack component="main" gap={5.375}>
      <Stack flex={0.8} position="relative">
        <Stack position="relative" width="100%" height={361.7}>
          <MUIImage
            src="/images/infographs/onboarding-one.webp"
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
            Corpo perfeito
            <br />
            fazendo exercícios&nbsp;
            <Typography
              fontFamily="var(--font-bebasneue)"
              fontWeight={400}
              fontSize={48}
              color="green_primary.main"
              component="span"
            >
              Crossfit
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
