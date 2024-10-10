import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

export default function Home() {
  return (
    <Container>
      <Stack
        flex={1}
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        textAlign={{
          xs: "center",
          sm: "match-parent",
        }}
      >
        <Typography variant="h4">Welcome to Fitness App</Typography>

        <Button
          sx={{
            bgcolor: "crimson",
            color: "white",

            "&:hover": {
              bgcolor: "darkred",
            },
          }}
        >
          Entrar
        </Button>
      </Stack>
    </Container>
  )
}
