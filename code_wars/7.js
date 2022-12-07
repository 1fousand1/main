function opposite(number) {
    if (number < 0)  return Math.abs(number);
    else  return number * -1;
  }


  ////нужно превратить отрицательное число в положительно, а положительное в отрицательное

function solution(str){
    let reversedStr = str.split('').reverse().join('');
    return reversedStr
}

//функция переворачивает строку str - rts