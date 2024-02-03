

function stringReverse(str: string){
    let starter = 0;
    let end = str.length - 1;
    let string = str.split("");
    let temp;

    while(starter < end){
      temp = string[starter];
      string[starter] = str[end];
      string[end] = temp;

      starter ++;
      end --;
    }

    return string.join("")

}

export default stringReverse