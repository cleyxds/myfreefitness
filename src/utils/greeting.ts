export default function getGreeting(): string {
  const currentHour = new Date().getHours()

  if (currentHour < 6) {
    return "boa madrugada"
  } else if (currentHour < 12) {
    return "bom dia"
  } else if (currentHour < 18) {
    return "boa tarde"
  } else {
    return "boa noite"
  }
}
