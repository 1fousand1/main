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

// // function basicOp(operation, value1, value2)
// // {
// //   if (operation =='+') return value1+value2;
// //   if (operation =='-') return value1-value2;
// //   if (operation =='*') return value1*value2; 
// //   if (operation =='/') return value1/value2;
// // не красивый вариант

function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+': return value1 + value2;
      case '-': return value1 - value2;
      case '*': return value1 * value2;
      case '/': return value1 / value2;
      default: return 'Operation must be one of + - * /';
  }
}

//четыре базовые мат. операции //

function booleanToString(b){
  if(b == true) return "true";
  else return "false";
}
//получает логические данные выводит стринг

function maps(x){
  let arr = x;
  return arr = arr.map(el => el *2); 
}
//умножает каждый элемент массива на 2
function makeUpperCase(str) {
    return str.toUpperCase();
}
//пишет весь текст заглавными 

function lovefunc(flower1, flower2){
  if (flower1 % 2 == 0 && flower2 % 2 != 0){
    return "true";
  } else if (flower1 % 2 != 0 && flower2 % 2 == 0){
    return "true";
  } else {
    return "false";
  }

}

//нечетное и четно число на вход на выход даст Тру, все остальное фолс - не проходит все тесты
function simpleMultiplication(number) {
  if (number % 2 == 0) {
    return number*8;
  } else  {
    return number*9;
  }
}
//Если четное чилсло на вход, то умножаем на 8, если нечетное на 9

function areYouPlayingBanjo(name) {
  if name.includes(R[0,0]) | name.includes(r[0,0]){
    return name + " plays banjo" 
  } else {
    return name + " does not play banjo"
  }
}

//не пашет
//функция на вход получает имя, если оно начианет с r либо R то выдает имя + вы граете в банджо
//в других случаях выдает имя + вы не играете в банджо


function invert(array) {
  for (let i = 0; i < array.length; i++) {
        if(array[i] == "0") {
          array[i] = array[i] * (1);
        }
        array[i] = array[i] * (-1);
     }
  return array ;
}
// Перевернуть(инвертировать) все значения в списке 

function doubleInteger(i) {
  return i*2;
}
//просто нужно удвоить число и вернуть обратно

function DNAtoRNA(dna) {
  return dna.replace(/T/g,'U')  
 }

 //Заменить все T на U

 const reverseSeq = n => {
    var start = n;
    var result = [];
    while (start > 0) {
      result.push(start--);
    };
    return result
};
 //на вход дается число создается список чисел в порядке от числа до нуля

 function stringToArray(string){
  return string.split(" ");
}

 //делает массив из строки разделяя по пробельному символу

 function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}
 //меняет слова местами

 function smash(words) {
    return words.join(" ");
};

 //соединяет массив в одну строку

const rps = (p1, p2) => {
  switch (p1, p2) {
      case (p1 === 'scissors' && p2 === 'paper'):
        return 'Player 1 won!';
        break;
      case (p1 === 'paper' && p2 === 'scissors'):
        return 'Player 2 won!';
        break;
      case (p1 === 'scissors' && p2 === 'rock'):
        return 'Player 2 won!';
        break;
      case (p1 === 'rock' && p2 === 'scissors'):
        return 'Player 1 won!';
        break;
      case (p1 === 'paper' && p2 === 'rock'):
        return 'Player 1 won!';
        break;
      case (p1 === 'rock' && p2 === 'paper'):
        return 'Player 2 won!';
        break;
      case (p1 === 'scissors' && p2 === 'scissors'):
        return 'Draw!';
        break;
      case (p1 === 'rock' && p2 === 'rock'):
        return 'Draw!';
        break;
      case (p1 === 'paper' && p2 === 'paper'):
        return 'Draw!';
        break;
      default:
        return 'Draw!';
        break;
  } 
}

  //игра камень ножницы бумага

  function monkeyCount(n) {
    const N = n;
    const arr = Array.from({length: N}, (_, index) => index + 1);
    return arr;
  }

  //посчитать количество элементов

function sum (numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};
  //посчитать сумму элементов массива