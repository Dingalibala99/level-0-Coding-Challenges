function convertTime(val) {
  let hours = Math.floor(val / 60);
  let minutes = val % 60;

  if(val === 60){
    hours -= hours;
    minutes = 60;
  }

  hours += hours === 1 ? " hour, " : " hours, ";

  minutes += minutes === 1 ? " minute " : " minutes ";

  return hours + minutes;
}
console.log(convertTime(60));
