export function numberFormat(number: number): string {
  const digits = number.toString().length;
  if (digits <= 4) {
    return number.toString();
  } else if (digits < 6) {
    return number.toString().slice(0, 2) + "K";
  } else if (digits < 7) {
    return number.toString().slice(0, 3) + "K";
  } else {
    return (
      number.toString().slice(0, 1) + "." + number.toString().slice(1, 2) + "M"
    );
  }
}
