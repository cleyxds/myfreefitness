"use client"

import { useReducer } from "react"

import { signIn } from "next-auth/react"

import { Form, Formik } from "formik"

import { useMutation } from "@tanstack/react-query"

import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import FormLabel from "@mui/material/FormLabel"
import FormControl from "@mui/material/FormControl"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import SvgIcon from "@mui/material/SvgIcon"

import FormInput from "@/components/form-input"

import * as Yup from "yup"
import { phoneInputMask } from "@/utils/input-masks"

const RegisterSchema = Yup.object().shape({
  fullname: Yup.string().required("Required"),
  phone: Yup.string().optional(),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
})

type RegisterSchema = Yup.InferType<typeof RegisterSchema>

export default function RegisterForm() {
  const [pwdvis, togglePwdVis] = useReducer((state) => !state, false)
  const [rootErrors, setRootErrors] = useReducer(
    (state: Record<string, any>, action: Record<string, any>) => ({
      ...state,
      ...action,
    }),
    {}
  )

  const mutation = useMutation({
    mutationFn: async (values: RegisterSchema) => {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "An error occurred")
      }

      return {
        result,
        initial: values,
      }
    },
    onSuccess: async ({ result, initial }) => {
      setRootErrors({})

      const data = result.data

      if (!initial.password) {
        throw new Error("Password is required to Login")
      }

      const login = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: initial.password,
      })

      if (login?.error) {
        throw new Error(login.error)
      }
    },
    onError: (error) => {
      setRootErrors({ root: error.message })
      alert(error.message)
    },
  })

  async function onSubmit(
    values: RegisterSchema,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) {
    await mutation.mutateAsync(values, {
      onSettled: () => {
        setSubmitting(false)
      },
    })
  }

  return (
    <Formik
      initialValues={{ email: "", password: "", fullname: "", phone: "" }}
      onSubmit={onSubmit}
      validationSchema={RegisterSchema}
    >
      {({ errors, touched, handleChange, isSubmitting, isValid, setFieldValue }) => (
        <Stack component={Form} gap={2.5}>
          <FormControl fullWidth>
            <FormLabel>Nome completo</FormLabel>

            <FormInput
              type="text"
              name="fullname"
              placeholder="Nome completo"
              error={Boolean(errors.fullname)}
              helperText={errors.fullname}
              onChange={handleChange}
              slotProps={{
                input: {
                  endAdornment:
                    touched.fullname && isValid ? (
                      <InputAdornment position="end">
                        <IconButton>
                          <SvgIcon sx={{ width: 12, height: 12 }}>
                            <svg
                              width="13"
                              height="11"
                              viewBox="0 0 13 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.032 1.29412C11.1014 1.20639 11.1878 1.13356 11.286 1.07996C11.3842 1.02635 11.4922 0.993078 11.6035 0.982121C11.7149 0.971165 11.8273 0.982749 11.9341 1.01618C12.0408 1.04962 12.1398 1.10421 12.225 1.17672C12.3102 1.24922 12.3799 1.33815 12.43 1.43819C12.4801 1.53823 12.5095 1.64733 12.5165 1.75899C12.5235 1.87065 12.5079 1.98257 12.4707 2.08809C12.4335 2.1936 12.3755 2.29054 12.3 2.37312L5.21798 10.7061C5.14612 10.7906 5.05811 10.8599 4.9591 10.91C4.8601 10.96 4.7521 10.9898 4.64144 10.9975C4.53078 11.0052 4.41969 10.9908 4.31469 10.955C4.20969 10.9192 4.11289 10.8628 4.02998 10.7891L0.279982 7.45612C0.114752 7.30932 0.0146046 7.1029 0.0015707 6.88226C-0.0114632 6.66162 0.0636845 6.44485 0.210482 6.27962C0.357279 6.11439 0.563702 6.01424 0.784338 6.00121C1.00497 5.98817 1.22175 6.06332 1.38698 6.21012L4.49998 8.97812L11.032 1.29412Z"
                                fill="black"
                              />
                            </svg>
                          </SvgIcon>
                        </IconButton>
                      </InputAdornment>
                    ) : null,
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <FormLabel>Celular</FormLabel>

            <FormInput
              type="text"
              name="phone"
              placeholder="Celular"
              error={Boolean(errors.phone)}
              helperText={errors.phone}
              onChange={(event) => {
                const phoneInput = phoneInputMask(event)

                setFieldValue("phone", phoneInput.target.value)
              }}
              slotProps={{
                input: {
                  endAdornment:
                    touched.email && isValid ? (
                      <InputAdornment position="end">
                        <IconButton>
                          <SvgIcon sx={{ width: 12, height: 12 }}>
                            <svg
                              width="13"
                              height="11"
                              viewBox="0 0 13 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.032 1.29412C11.1014 1.20639 11.1878 1.13356 11.286 1.07996C11.3842 1.02635 11.4922 0.993078 11.6035 0.982121C11.7149 0.971165 11.8273 0.982749 11.9341 1.01618C12.0408 1.04962 12.1398 1.10421 12.225 1.17672C12.3102 1.24922 12.3799 1.33815 12.43 1.43819C12.4801 1.53823 12.5095 1.64733 12.5165 1.75899C12.5235 1.87065 12.5079 1.98257 12.4707 2.08809C12.4335 2.1936 12.3755 2.29054 12.3 2.37312L5.21798 10.7061C5.14612 10.7906 5.05811 10.8599 4.9591 10.91C4.8601 10.96 4.7521 10.9898 4.64144 10.9975C4.53078 11.0052 4.41969 10.9908 4.31469 10.955C4.20969 10.9192 4.11289 10.8628 4.02998 10.7891L0.279982 7.45612C0.114752 7.30932 0.0146046 7.1029 0.0015707 6.88226C-0.0114632 6.66162 0.0636845 6.44485 0.210482 6.27962C0.357279 6.11439 0.563702 6.01424 0.784338 6.00121C1.00497 5.98817 1.22175 6.06332 1.38698 6.21012L4.49998 8.97812L11.032 1.29412Z"
                                fill="black"
                              />
                            </svg>
                          </SvgIcon>
                        </IconButton>
                      </InputAdornment>
                    ) : null,
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <FormLabel>Email</FormLabel>

            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              error={Boolean(errors.email)}
              helperText={errors.email}
              onChange={handleChange}
              slotProps={{
                input: {
                  endAdornment:
                    touched.email && isValid ? (
                      <InputAdornment position="end">
                        <IconButton>
                          <SvgIcon sx={{ width: 12, height: 12 }}>
                            <svg
                              width="13"
                              height="11"
                              viewBox="0 0 13 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.032 1.29412C11.1014 1.20639 11.1878 1.13356 11.286 1.07996C11.3842 1.02635 11.4922 0.993078 11.6035 0.982121C11.7149 0.971165 11.8273 0.982749 11.9341 1.01618C12.0408 1.04962 12.1398 1.10421 12.225 1.17672C12.3102 1.24922 12.3799 1.33815 12.43 1.43819C12.4801 1.53823 12.5095 1.64733 12.5165 1.75899C12.5235 1.87065 12.5079 1.98257 12.4707 2.08809C12.4335 2.1936 12.3755 2.29054 12.3 2.37312L5.21798 10.7061C5.14612 10.7906 5.05811 10.8599 4.9591 10.91C4.8601 10.96 4.7521 10.9898 4.64144 10.9975C4.53078 11.0052 4.41969 10.9908 4.31469 10.955C4.20969 10.9192 4.11289 10.8628 4.02998 10.7891L0.279982 7.45612C0.114752 7.30932 0.0146046 7.1029 0.0015707 6.88226C-0.0114632 6.66162 0.0636845 6.44485 0.210482 6.27962C0.357279 6.11439 0.563702 6.01424 0.784338 6.00121C1.00497 5.98817 1.22175 6.06332 1.38698 6.21012L4.49998 8.97812L11.032 1.29412Z"
                                fill="black"
                              />
                            </svg>
                          </SvgIcon>
                        </IconButton>
                      </InputAdornment>
                    ) : null,
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <FormLabel>Password</FormLabel>

            <FormInput
              type={pwdvis ? "text" : "password"}
              name="password"
              placeholder="Password"
              error={Boolean(errors.password)}
              helperText={errors.password}
              onChange={handleChange}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePwdVis}>
                        <SvgIcon sx={{ width: 16, height: 16 }}>
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6835 13.7666C14.6828 13.7682 14.6806 13.7687 14.6793 13.7674L12.523 11.6631L12.052 11.2001L10.98 10.1581L10.924 10.1041L8.97585 8.20949C8.94296 8.1775 8.89766 8.16162 8.85199 8.16606C8.69663 8.16831 8.54235 8.13993 8.39796 8.08254C8.25357 8.02516 8.1219 7.9399 8.01047 7.83162C7.89904 7.72334 7.81002 7.59418 7.74852 7.4515C7.68701 7.30882 7.65421 7.15541 7.65199 7.00006C7.65199 6.95915 7.63542 6.91998 7.60606 6.89149L5.07499 4.43606L3.67499 3.11406L1.88699 1.33306C1.78769 1.23772 1.71595 1.11735 1.67934 0.984649C1.64274 0.851945 1.64261 0.711823 1.67899 0.579056C1.71722 0.444629 1.79039 0.322731 1.89104 0.225769C1.99169 0.128807 2.11623 0.0602429 2.25199 0.0270561C2.38746 -0.00908782 2.52997 -0.00967006 2.66573 0.0253657C2.8015 0.0604015 2.92593 0.12987 3.02699 0.227056L4.38999 1.55806L5.56599 2.70006L8.7387 5.78902C8.76902 5.81854 8.80967 5.83506 8.85199 5.83506C9.1655 5.83078 9.46791 5.95103 9.69288 6.16943C9.91784 6.38784 10.047 6.68655 10.052 7.00006C10.052 7.04161 10.0688 7.0814 10.0986 7.11038L13.181 10.1091L14.781 11.6631L15.821 12.6631C15.8953 12.7341 15.9544 12.8195 15.9948 12.914C16.0352 13.0085 16.056 13.1103 16.056 13.2131C16.056 13.3159 16.0352 13.4176 15.9948 13.5121C15.9544 13.6066 15.8953 13.692 15.821 13.7631C15.6689 13.9109 15.4651 13.9936 15.253 13.9936C15.0421 13.9936 14.8396 13.9119 14.6877 13.7657C14.6864 13.7644 14.6842 13.7649 14.6835 13.7666ZM8.86899 12.4411C4.15799 12.4411 1.46299 8.23506 0.958991 7.38806C0.888688 7.27048 0.851562 7.13605 0.851562 6.99906C0.851563 6.86206 0.888688 6.72763 0.958991 6.61006C1.28753 6.05628 1.65825 5.52967 2.06746 5.03476C2.68528 4.28755 3.79752 4.30491 4.50199 4.97106L5.75903 6.19196C5.97332 6.40008 6.06028 6.70145 6.05199 7.00006C6.05288 7.36268 6.12724 7.72135 6.27058 8.05444C6.41392 8.38753 6.62327 8.68811 6.88599 8.93806C7.4244 9.4509 8.14251 9.73204 8.88599 9.72106C9.19424 9.71452 9.50482 9.80115 9.72597 10.016L10.39 10.6611L10.446 10.7161L11.477 11.7571C11.5555 11.8332 11.5286 11.9649 11.4255 12.0014C10.6658 12.2698 9.86837 12.4183 9.06199 12.4411H8.86899ZM13.747 9.55706L11.9451 7.80646C11.7314 7.59878 11.645 7.29801 11.652 7.00006C11.6415 6.26794 11.3406 5.57 10.8155 5.05972C10.2904 4.54945 9.5841 4.26864 8.85199 4.27906C8.54377 4.28559 8.23323 4.19886 8.01224 3.98389L6.12499 2.14806C6.0911 2.11602 6.10219 2.05965 6.14588 2.04336C6.94311 1.74613 7.78405 1.5821 8.63499 1.55806C13.417 1.41806 16.235 5.74806 16.744 6.61106C16.8139 6.72878 16.8508 6.86315 16.8508 7.00006C16.8508 7.13696 16.8139 7.27134 16.744 7.38906C16.2731 8.17183 15.7177 8.89935 15.0884 9.55878C14.7248 9.93969 14.1238 9.92485 13.747 9.55706Z"
                              fill="#3A4750"
                            />
                          </svg>
                        </SvgIcon>
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </FormControl>

          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Login
          </Button>
        </Stack>
      )}
    </Formik>
  )
}
