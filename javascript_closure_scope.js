//-----task1-----

function consoleRec(array,i = 0) {
  if (array[i]) {
    console.log(array[i]);	
  }

  if(i < array.length) {
    consoleRec(array, i + 1);
  }
}

consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции']);


//-----task2-----

var allNumbers = [1, 2, 4, 5, 6, 7, 8];
var someNumbers = [1, 2, 'привет', 4, 5, 'ololo', 6, 7, 8];
var noNumbers = ['это', 'массив', 'без', 'чисел'];

function isAllTrue(source,filterFn) {

  if (source.some(filterFn)) {
    return false;
  } else {
    return true;
  }

}

function isNumber(val) {

  return typeof val !== 'number';

}

console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false


//-----task3-----


function Calculator(a) {
  var currentState = a;

  

  return { 
  	add: function(a) {
  	currentState += a;
  	 return function(b) {
       return currentState = a + b;
  	 };
  },

	subtract: function(a) {
		return currentState -= a;
	},

	divide: function(a) {
		return currentState /= a;
	},

	multiply: function(a) {
		return currentState *= a;
	},

	reset: function() {
		return currentState = 0;
	},

	getResult: function() {
		return currentState;
	}
  };
}


var calc = new Calculator(0);


console.log(calc.getResult());
calc.add(7);
calc.subtract(2);
console.log(calc.getResult());
calc.divide(2);
calc.multiply(3);
console.log(calc.getResult());
calc.reset();
console.log(calc.getResult());