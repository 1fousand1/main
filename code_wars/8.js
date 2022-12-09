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

// function countSheeps(arrayOfSheep) {
//   const numbers = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];
//   const countItems = {};
//   for (const item of numbers) {
//     countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
//     console.log(countItems[item]);
//   }
// }
//подсчет повторяющихся элементов списка - не пашет, подумать ещё



// function highAndLow(numbers){
//   // var numbers = Numbers("1 2 3 4 5");
//   // var arr = numbers;//.split(' ');
//   // var min = Math.min(arr);
//   // var mx = Math.max(arr);
//   // //var res = mx + min;
//   //   //console.log(res.join());
//   //   console.log(min);
//   // }
//Находит большее значение строки и меньшее - тоже не пошло

function greet(name){
  let userName = name;
  let str = `Hello, ${userName} how are you doing today?`; //без ` ` - работать не будет
  return str;
}
//Вставляет имя юзера в шаблонное приветствие

function basicOp(operation, value1, value2)
{
  if (operation =='+') return value1+value2;
  if (operation =='-') return value1-value2;
  if (operation =='*') return value1*value2; 
  if (operation =='/') return value1/value2;
}

//четыре базовые мат. операции //нужно исправить на норм вариант и подумать что тут не так

/////
