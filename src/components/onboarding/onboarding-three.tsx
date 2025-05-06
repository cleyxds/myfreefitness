import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export default function OnboardingThree() {
  return (
    <Stack component="main">
      <Stack flex={0.8}>
        <Stack flex={1} />
      </Stack>

      <Stack flex={0.2} alignItems="center" gap={4}>
        <Stack gap={1} textAlign="center" px={6}>
          <Typography
            fontFamily="var(--font-bebasneue)"
            fontWeight="400"
            fontSize={48}
            color="common.black"
          >
            Healthy Muscular
            <br />
            <Typography
              fontFamily="var(--font-bebasneue)"
              fontWeight={400}
              fontSize={48}
              color="green_primary.main"
              component="span"
            >
              Sportswoman
            </Typography>
            <br />
            Standing
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
