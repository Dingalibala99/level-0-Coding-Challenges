function celsiusToFahrenheit(celsius) 
{
  let celsiusTemperature = celsius;
  let celsiusToFahrenheit = celsiusTemperature * 9 / 5 + 32;
  let message = celsiusTemperature+'\xB0C is ' + celsiusToFahrenheit + ' \xB0F.';
    console.log(message);
}
celsiusToFahrenheit(60);

function fahrenheitToCelsius(fahrenheit) 
{
  let fahrenheitTemperature = fahrenheit;
  let fahrenheitToCelsius = (fahrenheitTemperature - 32) * 5 / 9;
  let message = fahrenheitTemperature+'\xB0F is ' + fahrenheitToCelsius + '\xB0C.';
    console.log(message);
} 
fahrenheitToCelsius(45);
