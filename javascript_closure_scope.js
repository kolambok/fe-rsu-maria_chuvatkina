//-----task1-----

function wrapper() {

  var i = 0;

  function consoleRec(array) {
    console.log(array[i]);
      i++;
      if (i < array.length) consoleRec(array);
  }
  consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции']);
}

wrapper();

//-----task2-----

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привет', 4, 5, 'ololo', 6, 7, 8],
noNumbers = ['это', 'массив', 'без', 'чисел'];

function isAllTrue(source,filterFn) {

  for (var i = 0; i < source.length; i++) {

    if (source.every(filterFn)) return true;

	return false;

  }
}

function isNumber(val) {

  return typeof val === 'number';

}

console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false

//-----task3-----

function Calculator() {
	var currentState = 0;

	return {

		getResult: function() {
	    	return currentState;
	    },

		add: function(a) {
			currentState += a;
			return function(b) {
			currentState = a + b;
			};
	    },

	    subtract: function(a) {
	    	currentState -= a;
	    },

	    multiply: function(a) {
	    	return currentState *= a;
	    },

	    divide: function(a) {
	    	return currentState /= a;
	    },

	    reset: function() {
	    	currentState = 0;
	    } 
  };
}

var calc = Calculator();

console.log(calc.getResult());

calc.add(5);
calc.subtract(1);
calc.divide(2);
calc.multiply(3);

console.log(calc.getResult());

calc.reset();

console.log(calc.getResult());