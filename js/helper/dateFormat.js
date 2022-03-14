export function dateFormat(date) {
  const newDate = new Date(date);
  const newDateFormatted = newDate.toLocaleDateString("pt-BR");
  return newDateFormatted;
}
