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

function makeNegative(num) {
    if (num < 0) return num;
    else  return -(num); 
}

//возвращает негативное число

function evenOrOdd(number) {
    if (number % 2 == 0) return "Even";
    else  return "Odd";
  }

//Возвращает четное(Even) если четное и нечетеное(Odd) если нечетное

function repeatStr (n, s) {
    return s.repeat(n);  
  }

//Возвращает строки умноженные n-раз

