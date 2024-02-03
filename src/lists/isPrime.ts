function isPrime (n: number) {
    let isPrime: boolean;

    if(n > 1){
        for(let i = 2; i < n; i++){
            if(n % i === 0){
                return isPrime = false;
            }else{
                return isPrime = true;
            }
        }
    }

}

export default isPrime