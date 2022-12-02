////Training JS #7: if..else and ternary operator
function saleHotdogs(n){
    if (n < 5)  return 100;
    else if  (n >= 5 && n < 10) return 95;
    else   return 90;
}


////
function saleHotdogs(n){
    return (n < 5) ? 100*n : (n >= 5 && n < 10) ? 95*n : 90*n;  
}

saleHotdogs(10);