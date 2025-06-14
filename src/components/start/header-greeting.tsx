"use client"

import { ComponentProps } from "react"

import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import InputAdornment from "@mui/material/InputAdornment"
import SvgIcon from "@mui/material/SvgIcon"
import Skeleton from "@mui/material/Skeleton"

import useCurrentUser from "@/hooks/use-current-user"

import MUIImage from "@/components/mui-image"
import FormInput from "@/components/form-input"

import avatarImageFallback from "@/utils/avatar-image-fallback"
import getGreeting from "@/utils/greeting"

export default function HeaderGreeting({ ...props }: ComponentProps<typeof Stack>) {
  const { user } = useCurrentUser()

  if (!user) return <Skeleton variant="rounded" width="100%" height={171} />

  const avatarProps = avatarImageFallback(
    user.fullname,
    user?.imgProfilURL ?? "",
    (theme) => ({
      ...theme.typography.dm_sans_h6,
      width: 44,
      height: 44,
    })
  )

  const greeting = getGreeting()

  return (
    <Stack gap={3} width="100%" {...props}>
      <Stack justifyContent="space-between" alignItems="flex-start">
        <Stack gap={0.5}>
          <Avatar
            {...avatarProps}
            slots={{
              img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
                <Stack
                  position="relative"
                  width={44}
                  height={44}
                  borderRadius={9999}
                  overflow="hidden"
                >
                  <MUIImage src={props.src!} alt={props.alt!} fill priority />
                </Stack>
              ),
            }}
          />

          <Typography variant="dm_sans_body1" fontSize={10} color="black_19.300">
            Olá, {greeting}
          </Typography>

          <Typography variant="dm_sans_h6" fontSize={20} color="black_19.main">
            {user.fullname}
          </Typography>
        </Stack>
      </Stack>

      <FormInput
        placeholder="Pesquise"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4999 14H14.7099L14.4299 13.73C15.5265 12.4524 16.0854 10.7997 15.9894 9.11872C15.8933 7.43778 15.1498 5.85943 13.9148 4.71504C12.6798 3.57066 11.0495 2.94925 9.36613 2.98128C7.68275 3.01331 6.07726 3.6963 4.88672 4.88684C3.69618 6.07738 3.01319 7.68287 2.98116 9.36625C2.94913 11.0496 3.57054 12.6799 4.71492 13.9149C5.85931 15.1499 7.43766 15.8934 9.11859 15.9895C10.7995 16.0856 12.4523 15.5266 13.7299 14.43L13.9999 14.71V15.5L18.9999 20.49L20.4899 19L15.4999 14ZM9.49992 14C8.60991 14 7.73988 13.7361 6.99986 13.2417C6.25983 12.7472 5.68306 12.0444 5.34246 11.2221C5.00187 10.3999 4.91275 9.49505 5.08639 8.62214C5.26002 7.74922 5.6886 6.9474 6.31794 6.31806C6.94728 5.68873 7.7491 5.26014 8.62202 5.08651C9.49493 4.91288 10.3997 5.00199 11.222 5.34259C12.0443 5.68318 12.7471 6.25996 13.2415 6.99998C13.736 7.74 13.9999 8.61003 13.9999 9.50004C14.0007 10.0912 13.8849 10.6767 13.659 11.2231C13.4331 11.7694 13.1017 12.2658 12.6837 12.6838C12.2656 13.1018 11.7693 13.4332 11.2229 13.6591C10.6766 13.885 10.0911 14.0008 9.49992 14Z"
                      fill="currentColor"
                    />
                  </svg>
                </SvgIcon>
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
        }}
      />
    </Stack>
  )
}
