function palindromeNumber(x: number): boolean {
    let number = String(x)
    let left = 0;
    let right = number.length - 1

    while(left < right){
        if(number[left] === number[right]){
            return true;

        } 
        left ++ 
        right --
    
    }

    return false
};

export default palindromeNumber