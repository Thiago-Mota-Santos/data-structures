function isPalindrome(str: string): boolean{
    let string = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let left = 0;
    let right = str.length - 1

    while(left < right){
        if(string[left] === string[right]){
            return true;

        } 
        left ++ 
        right --
    
    }

    return false

}

export default isPalindrome