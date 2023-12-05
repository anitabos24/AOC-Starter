import lines from './lib/read-lines.mjs';

let antwoord1 = 0;
let array = [];

// var textNumbers = [
//   'zero',
//   'one',
//   'two',
//   'three',
//   'four',
//   'five',
//   'six',
//   'seven',
//   'eight',
//   'nine'
// ];
var textNumbers = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9
};

for (const line of lines) {
  // iets doen met elke line om tot het antwoord te komen
  console.log(line);

  // kan het vinden als laatste argument duidelijk gespecificeerd is. For-loop over de textnumbers? en dan kijken naar de index? of gelijk replace?
  console.log(line.replace(textNumbers));


  // const getNumber = line.textNumbers();


  // const splitLine = line.split("");
  // console.log(splitLine);

  // const separateNumbers = splitLine.map(number => parseInt(number)).filter(item=>!isNaN((item)));
  // console.log(separateNumbers);

  // const firstNumber = separateNumbers[0];
  // console.log(firstNumber);

  // const lastNumber = separateNumbers[separateNumbers.length - 1]
  // console.log(lastNumber);

  // // zorgen dat hij de cijfers als strings optelt (1+1=11, geen 2)
  // const sumOfLine = firstNumber.toString() + lastNumber.toString();
  // console.log(sumOfLine);

  // array.push(sumOfLine);
}
// console.log(array);
// array.forEach(number => {
//   antwoord1 += parseInt(number);
// });

console.log('Antwoord 1 =', antwoord1);