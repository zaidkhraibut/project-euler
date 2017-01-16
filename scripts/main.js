var multiplesThreeOrFive = function() {
  var numbers = [];
  var userInput = document.getElementById("3or5input").value;
  for (var i = 0; i < userInput; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      numbers.push(i);
    }
  }

  var getSum = function(total, num) {
    return total + num;
  };

  document.getElementById("prob1-result").innerHTML = ("Result:   " + numbers.reduce(getSum));
};

var fibonacciSequenceFunc = function() {
  var fibInput = document.getElementById("fib-seq-input").value;
  var fibArray = [];
  var fibBefore = 0;
  var fibCurrent = 1;
  var fibAfter = 1;

  for (var j = 0; j < fibInput; j++) {
    fibCurrent = fibBefore + fibAfter;
    fibBefore = fibAfter;
    fibAfter = fibCurrent;
    fibArray.push(fibCurrent);
  }

  var fibEven = [];
  for (var f = 0; fibArray[f] <= fibInput; f++) {
    if (fibArray[f] % 2 === 0) {
      fibEven.push(fibArray[f]);
    }
  }

  var getSum = function(total, num) {
    return total + num;
  };

  document.getElementById("prob2-result").innerHTML = ("Result:   " + fibEven.reduce(getSum));
};
