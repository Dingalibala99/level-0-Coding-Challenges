function convertTime(val) {
  let hours = ~~(val / 60);
  let minutes = val % 60;

  hours += hours === 1 ? " hour " : " hours, ";

  minutes += minutes === 1 ? " minute " : " minutes ";

  return hours + minutes;
}
console.log(convertTime(121));
