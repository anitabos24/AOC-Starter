import lines from './lib/read-lines.mjs';

let antwoord1 = 0;
let array = [];

for (const line of lines) {
  // iets doen met elke line om tot het antwoord te komen
  console.log(line);

  const splitLine = line.split("");
  console.log(splitLine);

  const separateNumbers = splitLine.map(number => parseInt(number)).filter(item=>!isNaN((item)));
  console.log(separateNumbers);

  const firstNumber = separateNumbers[0];
  console.log(firstNumber);

  const lastNumber = separateNumbers[separateNumbers.length - 1]
  console.log(lastNumber);

  // zorgen dat hij de cijfers als strings optelt (1+1=11, geen 2)
  const sumOfLine = firstNumber.toString() + lastNumber.toString();
  console.log(sumOfLine);

  array.push(sumOfLine);
}
console.log(array);
array.forEach(number => {
  antwoord1 += parseInt(number);
});

console.log('Antwoord 1 =', antwoord1);