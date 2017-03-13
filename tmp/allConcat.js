var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  $('#math-form').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var simpleCalculator = new Calculator("red");
    var result;
    if (operator === "add") {
    result = simpleCalculator.add(number1, number2);
    console.log(result);
    } else if (operator === "subtract") {
     result = simpleCalculator.sub(number1, number2);
    } else if (operator === "multiply") {
     result = simpleCalculator.mult(number1, number2);
    } else if (operator === "divide") {
     result = simpleCalculator.div(number1, number2);
    }
    $("#output").append(result);
    console.log(result);
  });
});

var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function() {
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
