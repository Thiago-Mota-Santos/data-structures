function isPalindrome (str: string): boolean {
    let string = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let start = 0
    let end = str.length - 1;

    while(start < end) {
        if(string[start] !==  string[end]){
            return false;
        }   

        start ++;
        end --;
    }

    return true

}

console.log(isPalindrome("kekers")) 

