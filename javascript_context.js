//-----task1 and task2-----

function Calculator(currentState) {
  this.currentState = currentState;

  this.add = function(a) {
    this.currentState += a;
    return this;
  };

  this.subtract = function(a) {
    this.currentState -= a;
    return this;
  };

  this.divide = function(a) {
    this.currentState /= a;
    return this;
  };

  this.multiply = function(a) {
    this.currentState *= a;
    return this;
  };

  this.reset = function() {
    this.currentState = 0;
    return this;
  };

  this.getResult = function() {
    return this.currentState;
  };

  this.getInitialState = function(callback) {
    this.currentState = 5;
      setTimeout(function () {

        callback();

        return this;

      }, 500);

    }
}

var calc = new Calculator(0);

console.log(calc.getResult());
calc.add(7);
console.log(calc.getResult());
calc.subtract(3);
console.log(calc.getResult());
calc.divide(2);
console.log(calc.getResult());
calc.multiply(6);
console.log(calc.getResult());
calc.reset();
console.log(calc.getResult());
console.log(calc.add(7).subtract(3).divide(2).multiply(6).getResult());



calc.getInitialState(function(){
  console.log(calc.getResult()) // 5
});



//-----task3-----

function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

function f() {
  alert( this );
}

var g = bind(f, "Context");
g();