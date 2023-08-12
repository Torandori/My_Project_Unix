export default function (date){
  const currentDate = new Date(date);
  const addZero = (n) => n < 10 ? '0' + n : n;
  return `${addZero(currentDate.getDate())}.${addZero(currentDate.getMonth() + 1)}.${currentDate.getFullYear()}`
}