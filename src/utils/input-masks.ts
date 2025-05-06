import { ChangeEvent } from "react"

export function priceInputMask(
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  const inputValue = event.target.value

  let value = inputValue.replace(/\D/g, "")

  if (value.length > 2) {
    value = value.slice(0, -2) + "," + value.slice(-2)
  } else if (value.length === 4) {
    value = "0," + value
  } else if (value.length === 1) {
    value = "0,0" + value
  }

  if (value.startsWith("0")) {
    value = value.slice(3)
  }

  event.target.value = value

  return event
}

export function birthdayInputMask(
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  const inputValue = event.target.value

  let value = inputValue.replace(/\D/g, "") // Remove non-numeric characters

  if (value.length > 8) {
    value = value.slice(0, 8) // Limit to 8 digits
  }

  if (value.length > 4) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4)
  } else if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2)
  }

  event.target.value = value

  return event
}

export function phoneInputMask(
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  const inputValue = event.target.value

  let value = inputValue.replace(/\D/g, "") // Remove non-numeric characters

  if (value.length > 11) {
    value = value.slice(0, 11) // Limit to 11 digits
  }

  if (value.length > 6) {
    value = value.slice(0, 2) + " " + value.slice(2, 7) + "-" + value.slice(7)
  } else if (value.length > 2) {
    value = value.slice(0, 2) + " " + value.slice(2)
  }

  event.target.value = value

  return event
}

export function numberInputMask(
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  const inputValue = event.target.value

  const value = inputValue.replace(/\D/g, "") // Remove non-numeric characters

  event.target.value = value

  return event
}
