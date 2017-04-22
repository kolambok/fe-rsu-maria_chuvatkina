//1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27

//-----task1-----
var now = new Date();
var options = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

console.log("Today is: " + now.toLocaleString("en-US", options));

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
var nextNewYear = new Date(now.getFullYear() + 1, 0, 1);

var daysUntil = Math.round((nextNewYear - now) / 1000 / 3600 / 24);
console.log(daysUntil);

//-----task5-----

var array = [1, 2, 3, 4, 5];
var string = "nfjbhjngv";
var result;

function is_array(data) {

  if (typeof(data) === "object") {
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

var arr = [1, 9, 0, 5, 3, 5, 7, 6, 5, 4, 7, 8, 3, 7];

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
  return (element + " shows " + countCloneArray + " times");
}

var arr = [1, 9, 0, 5, 3, 5, 7, 6, 5, 4, 7, 8, 3, 7, 7];
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

var arr = [1, 9, 0, 5, 3, 5, 7, 6, 5, 4, 7, 8, 3, 7, 7];

function shuffleArray() {
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

//-----task12-----

var library = [

{ author: "Bill Gates", title: "The Road Ahead", libraryID: 1254},

{ author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264},

{ author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245}

];

var result = library.sort(function(a,b) {

  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
});


for(var i in result){
  console.log(result[i]);
}

//-----task13-----

var arr1 = [1, 9, 0, 5, 3, 5];
var arr2 = [7, 6, 5, 4, 7, 8, 3, 7, 7];

function mergeArrays(array1,array2) {

  var array3 = array1.concat(array2);

  for (var i = 0; i < array3.length; i++) {
    for (var j = i + 1; j < array3.length; j++) {
      if (array3[i] === array3[j]) {
        array3.splice(j,1);
      }
    }
  }
  return array3;
}

mergeArrays(arr1,arr2);

//-----task14-----

function removeElementOfArray(array,x) {
  var index = array.indexOf(x);
  if (index > -1) array.splice(index,1);
  return array;
}
var arr = ["Lemon", "Apple", "Melow", "Cherry", "Pear"];

removeElementOfArray(arr,"Apple");

//-----task15-----

var arr = [1, 9, 0, 5, 3, 5, 7, 6, 5, 4, 7, 8, 3, 7, 7];

function getRandomItem(array) {

  var random = Math.floor(Math.random() * array.length);
  return array[random];
}

console.log(getRandomItem(arr));

//-----task16-----

var arr = ["Lemon", "Apple", "Melow", "Cherry", "Pear"];

function moveElement(array, x, pos) {
  var index = array.indexOf(x);
  array.splice(pos, 0, array[index]);
  array.splice(index, 1);
  return array;
}

moveElement(arr, "Apple", -1);

//-----task17-----

function getDifferenceInDays(date1, date2) {
  var diff = date2 - date1;
  return (Math.round(diff / 1000 / 60 / 60 / 24) + " days between " + date1.toDateString() + " and " + date2.toDateString());
}

var date1 = new Date(2017, 4, 1);
var date2 = new Date(2017, 4, 15);

getDifferenceInDays(date1, date2);

//-----task18-----

var dArray = ["2015/02/01", "2015/02/02","2015/01/03"];
var date = dArray.slice();

function maxDate(a, b) {

  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

date.sort(maxDate);
console.log(date[0]);

//-----task19-----

var str = "Lemon, Apple, Melow, Lemon, Cherry, Pear, Cherry";

function createArrayFromString(string) {
  var arr = string.split(", ");
  return arr;
}

createArrayFromString(str);

//-----task20-----

var str = "nbjk ndgjrdi klbioytg";

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

capitalizeFirstLetter(str);

//-----task21-----

function camelize(string) {

var arr;

if (!!(~string.indexOf("-"))) {
  arr = string.split("-");
} else if (!!(~string.indexOf(" "))) {
  arr = string.split(" ");
}

  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join("");
}

console.log(camelize("Java Script"));

console.log(camelize("java-script"));

console.log(camelize("Java Script Exercises"));

//-----task22-----

var arr = [1, 9, 0, 5, 3, 5, 7, 6, 5, 4, 7, 8, 3, 7];

function findHighestValue(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
}

arr.sort(findHighestValue);
console.log(arr[0]);

//-----task23-----

var arr = [1, 9, 0, 5, 3, 5, 7, 6, 5, 4, 7, 8, 3, 7];

function findLowestValue(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

arr.sort(findLowestValue);
console.log(arr[0]);

//-----task24-----

var number = 5;
var string = "Abrakadabra";
var boolean = true;
var nothing = null;
var all = NaN;
var anotherNumber = 255.55;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log(isNumeric(number));
console.log(isNumeric(string));
console.log(isNumeric(boolean));
console.log(isNumeric(nothing));
console.log(isNumeric(all));
console.log(isNumeric(anotherNumber));

//-----task25-----

var arr = [1, 9, 0, NaN, 5, 3, 5, 7, null, 6, "Gag", 5, 4, undefined, 7, 8, 3, 7];

function calcArray(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {

    if (array[i] === "" || array[i] === null || isNaN(array[i])) {
      array.splice(i, 1);
    }
      sum += array[i];
  }
  return sum;
}

console.log(calcArray(arr));

//-----task26-----

var table = {
  width: 50,
  length: 100,
  height: 120,
  color: "Birch",
  items: null
};

var counter = 0;

for (var key in table) {
  counter++;
}

console.log("Length: " + counter);

//-----task27-----

var table = {
  width: 50,
  length: 100,
  height: 120,
  color: "Birch",
  items: null
};

for (var key in table) {
  console.log(key);
}