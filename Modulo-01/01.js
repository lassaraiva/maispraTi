//Ler temperatura em °C e transformar em °F.

let prompt = require('prompt-sync')();

console.log('====== Conversor °C -> °F ======');
let grausCelsius = parseInt(prompt('Informe a temperatura em Celsius(°C): '));
let converterFahrenheit = parseFloat(grausCelsius) * 1.8 + 32;
console.log('Temperatura em Fahrenheit(°F):',converterFahrenheit );