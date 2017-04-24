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

