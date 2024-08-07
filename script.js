//Задание 1//
let myName = 'Валерия';

function greet(myName) {
    alert(`Привет, ${myName}!`);
    console.log(myName);
}
greet(myName);

//Задание 2//
import {celsiusToFahrenheit} from './module/celsiusToFahrenheit.js'
celsiusToFahrenheit(100);

//Задание 3//
import {calculateFallDistance} from './module/calculateFallDistance.js'
calculateFallDistance(60);

//Задание 4//
import {calculateAverage} from './module/calculateAverage.js'
calculateAverage(10, 10, 10);

//Задание 5//
import {concatStrings} from './module/concatStrings.js'
concatStrings('Привет', 'Мир');