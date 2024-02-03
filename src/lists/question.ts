import console from "console";
import calibration from "./text";


function CalibrationSum(doc: string[]): number {
    let total: number = 0;
    for (const row of doc) {
      const numbers = row.match(/\d/g); 
      if (numbers) {
        const first = parseInt(numbers[0])
        const last = parseInt(numbers[numbers.length - 1])
        const calibration = Number(`${first}${last}`)
        
        total += calibration
      }
    } 
  
    return total;
}

const valueMap = {
  "one" : 1,
  "two" : 2,
  "three" : 3,
  "four" : 4,
  "five" : 5,
  "six" : 6,
  "seven" : 7,
  "eight" : 8,
  "nine" : 9,
}

function convertStringToNumber(str: string) {
  let result = '';

  Object.keys(valueMap).forEach(key => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi'); 
    str = str.replace(regex, valueMap[key]); 
  });

  result = str.replace(/\D/g, '');

  return result.split("");
}

function calibrationWithLetters(doc: string[]): number {
  let total: number = 0;
  
  for (const row of doc) {
    const numbers = convertStringToNumber(row)
    console.log(numbers)
    if (numbers) {
      
      const first = parseInt(numbers[0]);
      const last = parseInt(numbers[numbers.length - 1]);
      total += first + last;
    }
  }
  
  return total;
}
  const calibration = `
    two1nine             
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen
`

// const calibration = `
//   threefour
// `
  
  // const sum: number = CalibrationSum(calibration);
  const sumLetter: number = calibrationWithLetters(calibration.trim().split("\n"))

  // console.log(`Calibration sum is: ${sum}`);
  console.log(`Calibration sum with letter is: ${sumLetter}`);
  