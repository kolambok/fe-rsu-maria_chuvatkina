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

var Calculator = {
	currentState: 0,

	add: function(a) {
		this.currentState = this.currentState + a;
		return function(b) {
			return Calculator.add(b);
		};
	},

	substract: function(a) {
		this.currentState = this.currentState - a;
		return function(b) {
			return Calculator.substract(b);
		};
	},

	divide: function(a) {
		this.currentState = this.currentState / a;
		return function(b) {
			return Calculator.divide(b);
		};
	},

	multiply: function(a) {
		this.currentState = this.currentState * a;
		return function(b) {
			return Calculator.multiply(b);
		};
	},

	getResult: function() {
		return this.currentState;
	},

	reset: function() {
		return this.currentState = 0;
	}

};

Calculator.add(1)(2)(7);
console.log(Calculator.getResult());
Calculator.divide(2)(2.5);
console.log(Calculator.getResult());
Calculator.reset();
console.log(Calculator.getResult());