// function animal(obj){
//     var obj = {}
//     obj.name="dog"
//     obj.legs="4"
//     obj.color="white"
//     return "This"+" "+obj.color+" "+obj.name+" "+"has"+" "+obj.legs
//   +" "+"legs."
//   }
////не проходит все тесты


function animal(obj){
    var animal_obj = {name:'dog',legs:4,color:"white"};
    return "This"+" "+obj.color+" "+obj.name+" "+"has"+" "+obj.legs+" "+"legs.";
  }

///а вот все тесты прошел код, е-ху

function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }

//А вот так сделать красивее это можно было сделать