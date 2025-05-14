import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"

import HeaderTabsLayout from "@/components/tabs-layout"

import HeaderGreeting from "@/components/start/header-greeting"
import FitInfograph from "@/components/infographs/fit-infograph"
import SelectGoal from "@/components/start/select-goal"
import Categories from "@/components/start/categories"
import PopularExercises from "@/components/start/popular-exercises"

export default function page() {
  return (
    <HeaderTabsLayout
      header={{ children: <HeaderGreeting zIndex={1} /> }}
      px={2.625}
      pt={3.75}
    >
      <Stack mb={11.375}>
        <FitInfograph mt={6.3475} />

        <SelectGoal mt={4.23} zIndex={1} />

        <Categories mt={2.75} />

        <Divider sx={{ my: 2 }} />

        <PopularExercises
          mt={0.5}
          exercises={
            [
              {
                id: "1",
                title: "Agachamento com Halteres",
                fitnessLevel: "intermediary",
                slug: "agachamento-com-halteres",
              },
              {
                id: "2",
                title: "Flexão de Braços",
                fitnessLevel: "intermediary",
                slug: "flexao-de-bracos",
              },
              {
                id: "3",
                title: "Prancha Frontal",
                fitnessLevel: "intermediary",
                slug: "prancha-frontal",
              },
            ] as Exercise[]
          }
        />
      </Stack>
    </HeaderTabsLayout>
  )
}
