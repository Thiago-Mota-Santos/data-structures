
function twoSum(arr: number[], target: number){
    let starterPointer = 0;
    let endpointer = arr.length - 1;
    let result: number[] = [];


    while(starterPointer < endpointer){

    let sum = arr[starterPointer] + arr[endpointer];

    if(sum === target){
        result.push(starterPointer + 1)
        result.push(endpointer + 1);
        break;
    }
    
    if (sum > target) endpointer--;
    else starterPointer++;


    }

    return result
}

export default twoSum;