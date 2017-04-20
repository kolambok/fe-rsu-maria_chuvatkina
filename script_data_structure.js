//1,2,3,4,5,6,7,8,9,10,11

//-----task1-----
var now = new Date();
var options = {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

console.log("Today is: "+now.toLocaleString('en-US', options));

//-----task2-----

var now = new Date();
console.log(now);

//-----task3-----

for (var year = new Date(2014); year <= new Date(2050); year++) {

  var dateJanSunday = new Date(year,0,1);

  if (dateJanSunday.getDay() === 0)
    console.log("1st January, Sunday "+year);
}

//-----task4-----

  var now = new Date();
  var nextNewYear = new Date(now.getFullYear()+1,0,1);

  var daysUntil = Math.round((nextNewYear - now)/1000/3600/24);
  console.log(daysUntil);

//-----task5-----

var array = [1,2,3,4,5];
var string = "nfjbhjngv";
var result;

function is_array(data) {

    if (typeof(data) == "object") {
      result = "array";
    } else {
      result = "not array";
    }
     return result;
}

console.log(is_array(string));

//-----task6-----

function cloneArrray(array) {
  var arrClone = array.slice();
  return arrClone;
}

var arr = [1,9,0,5,3,5,7,6,5,4,7,8,3,7];

cloneArrray(arr);

//-----task7-----

function frequency(array) {
var countArray = 0;
var countCloneArray = 1;
var element;

  for (var i = 0; i < array.length; i++) {

    for (var j = i; j < array.length; j++) {

      if (array[j] == array[i]) countArray++;
				
      if (countCloneArray < countArray) {
        countCloneArray = countArray;
        element = array[i];
        }

    }
    countArray = 0;
  }
  return (element+" shows "+countCloneArray+" times");
}

var arr = [1,9,0,5,3,5,7,6,5,4,7,8,3,7,7];
frequency(arr);

//-----task8-----

function changeCase(string) {
  var reverse = string[0].toLowerCase() + string.slice(1).toUpperCase();
  return reverse; 
}

changeCase("Powercase");

//-----task9-----

function ignoreDuplicate(strarr) {

  for (var i = 0; i < strarr.length; i++) {

  	for (var j = i + 1; j < strarr.length; j++) {

  	  if (strarr[i] === strarr[j]) {
  		strarr.splice(j,1);
  	  }
    }
  }
  return strarr;
}

var arr = ["Lemon", "Apple", "Melow", "Lemon", "Cherry", "Pear", "Cherry"];

ignoreDuplicate(arr);

//-----task10-----

var arr = [1,9,0,5,3,5,7,6,5,4,7,8,3,7,7];

function shuffleArray(array) {
	return Math.random() - 0.5;
}

arr.sort(shuffleArray);

console.log(arr);

//-----task11-----

function removeZero(array) {

  for (var i = 0; i < array.length; i++) {

  	if (array[i] === undefined
  		|| array[i] === null
  		|| Number.isNaN(array[i])
  		|| array[i] === "") {
      array.splice(i,1);
    }

    if (array[i] === 0) array.splice(i,1);
    if (array[i] === false) array.splice(i,1);
  }
  return array;
}

var arr = ["Lemon", undefined, "Apple", null, 0, false, "Melow", "", "Lemon", NaN, "Cherry", "Pear", "Cherry"];

removeZero(arr);