function squareSum(numbers){
    var result = 0;
    numbers.forEach(function(item) {
        result += Math.pow(item, 2);
    });
    return result;
}

///Возвращает квадратную сумму