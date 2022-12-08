function squareSum(numbers){
    var result = 0;
    numbers.forEach(function(item) {
        result += Math.pow(item, 2);
    });
    return result;
}

//Возвращает квадратную сумму

function noSpace(x){
    let str = x
    return str.split(" ").join("");
  }

//убирает все пробелы из строки

function sumN(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
}

//Вычисляет сумму чисел до данного