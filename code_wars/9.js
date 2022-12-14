function switchItUp(number){   
var numb = number;
    switch (numb === number) {
        case number===1:
            return 'One';
            break;
        case number===2:
            return 'Two';
            break;
        case number===3:
            return 'Three';
            break;
        case number===4:
            return 'Four';
            break;
        case number===5:
            return 'Five';
            break;
        case number===6:
            return 'Six';
            break;
        case number===7:
            return 'Seven';
            break;
        case number===8:
            return 'Eight';
            break;
        case number===9:
            return 'Nine';
            break;
        case number===0:
            return 'Zero';
            break;
        default:
            break;
    } 
}
// цифры от 1 до 9 превращает в строку "one", "two".."nine"
function arrayPlusArray(arr1, arr2) {
    var x = [].concat(arr1, arr2)
    var s = 0;
    for (i = 0; i < x.length; i++){
    s += x[i];
    }
    return s
}
// получить сумму двух массивов


function sumStr(a,b) {
    let n1 = Number(a);
    let n2 = Number(b);
    let sum = n1 + n2;
    return String(sum)
  }
// трансформирует строки в числа, суммирует их и сумму трансформирует обрано в строку  

function validateHello(greetings) {  
    var greet = greetings;
        switch (greet) {
            case 'hello':
                return greetings.includes('hello');
                break;
            case 'ciao':
                return greetings.includes('ciao');
                break;
            case 'salut':
                return greetings.includes('salut');
                break;
            case 'hallo':
                return greetings.includes('hallo');
                break;
            case 'hola':
                return greetings.includes('hola');
                break;
            case 'ahoj':
                return greetings.includes('ahoj');
                break;
            case'czesc':
                return greetings.includes('czesc');
                break;
            default:
                return false;
                break;
        } 
    }

//ищет определенные слова 'приветсвия' в подстроке и выводит тру либо фолс
///проходит не все тесты

function between(a, b) {
    let array = [];
    for (let i = a; i <= b; i++) array.push(i);
   
    return array;
  }

//функцию с именем , которая принимает два числа 
//и возвращает массив, в котором записаны целые числа от a до b 