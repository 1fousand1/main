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


function greet() {
    let h = "h";
    let e = "e";
    let l = "l";;
    let o = "o";
    let space = " ";
    let w = "w";
    let r = "r";
    let d = "d";
    let symb = "!";
    let res= h+e+l+l+o+space+w+o+r+l+d+symb;
    return res;// Write a function "greet" that returns "hello world!"
  }

  //функция которая "креативным способом" выдает хеллоу ворлд
  
  const stringToNumber = function(str){
    let num = Number(str);
    return num;
  }

//превращает номер в число