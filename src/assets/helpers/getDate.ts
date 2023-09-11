export function getDate(dateString: string) {
  const res = new Date(dateString);
  return `${padZero(res.getDate())}.${padZero(
    res.getMonth()
  )}.${res.getFullYear()} г.`;
}

function padZero(v: string | number) {
  if (+v < 10) return "0" + v;
  return v;
}
