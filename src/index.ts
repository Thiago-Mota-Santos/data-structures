import { Base64String, base64, unbase64 } from "./auth/base64";
import fat from "./lists/fat";
import isPrime from "./lists/isPrime";
import stringReverse from "./lists/list";
import palindromeNumber from "./lists/palindromeNumber";
import isPalindrome from "./lists/palindrone";
import twoSum from "./lists/twoSun";

// console.log(stringReverse("i'm feeling well"))
// console.log(fat(4)) //120
//  console.log(isPalindrome("b"));
console.log(palindromeNumber(0))


// const inputString = "Hello, World!";
// const encodedString: Base64String = base64(inputString);

// console.log("String codificada em Base64:", encodedString);

// const decodedString: string = unbase64(encodedString);

// console.log("String decodificada:", decodedString);



// const binarySearch = (arr: number[], target: number) => {
//     let left = 0
//     let right = arr.length - 1

//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2)

//         if(arr[middle] > target){
//             right = middle - 1
//         } else if(arr[middle] < target){
//             left = middle + 1
//         }else {
//             return middle
//         }
//     }

//     return -1
// }

// const arr = [1, 3, 5, 7, 8, 10]
// console.log(binarySearch(arr, 1))
