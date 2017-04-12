/*-----task1-----*/

var a;
var b;

/*-----task2-----*/

var m = 3;
var h = 4;
var sTriangle = 0.5*m*h;
console.log(sTriangle);

/*-----task3-----*/

var array = [3,6,4,8,"BingO"];

  for (var i = array.length - 1; i >= 0; i--) {
     console.log(array[i]);
  }


var j = array.length - 1;

  while (j >= 0) {
    console.log(array[j]);
    j--;
  }


  do{
    console.log(array[j]);
    j--;
  }while(j >= 0);

/*-----task4-----*/

var iteration1 = 0;
var iteration2 = 0;

  for (var count1 = 0; count1 < 3; count1++) {
    console.log(++iteration1);
  }

  for (var count2 = 0; count2 < 3; count2++) {
    console.log(iteration2++);
  }

/*-----task5-----*/

var number = -9;

  if (number > 0) {
    console.log(number+" is positive number");
  } else if (number < 0) {
    console.log(number+" is negative number");
  } else {
    console.log(number+" is zero");
  }

/*-----task6-----*/

var user = prompt("What is your name?", "");
alert( "Nice to meet you, "+user+"!");

/*-----task7-----*/

function factorial(numberFact) {
  var result = 1;

    for (var count = numberFact; count > 1; count--) {
      result *= count;
    }
      return result;
    }

alert(factorial(2));