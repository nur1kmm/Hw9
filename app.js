function calculateSum() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    var sum = num1 + num2;

    document.getElementById('result').innerHTML = 'Result: ' + sum;
}
/////////////////////////////////////////////////////////////////////////
    function checkNumber() {
        var number = document.getElementById('numberInput').value;
    
        number = parseFloat(number);
    
        if (isNaN(number)) {
            alert('Please enter a valid number');
            return;
        }
    
        if (number > 0) {
            document.getElementById('result2').innerHTML = 'Result: Positive';
        } else if (number < 0) {
            document.getElementById('result2').innerHTML = 'Result: Negative';
        } else {
            document.getElementById('result2').innerHTML = 'Result: Zero';
        }
    }
/////////////////////////////////////////////////////////////////////////
    function checkEven() {
        var number = document.getElementById('numberInput3').value;
    
        number = parseInt(number);
    
        if (isNaN(number)) {
            alert('Please enter a valid number');
            return;
        }
    
        if (number % 2 === 0) {
            document.getElementById('result3').innerHTML = 'Result: Yes';
        } else {
            document.getElementById('result3').innerHTML = 'Result: No';
        }
    }
/////////////////////////////////////////////////////////////////////////


    function calculate4() {
        var num1 = document.getElementById('num4').value;
        var num2 = document.getElementById('num4_2').value;
    
        var sum = num1 + num2;
        var difference = num1 - num2;
        var product = num1 * num2;
    
        var quotient;
        if (num2 !== 0) {
            quotient = num1 / num2;
        } else {
            quotient = 'Undefined (division by zero)';
        }
    
        document.getElementById('sum4').innerHTML = 'Sum: ' + sum;
        document.getElementById('difference4').innerHTML = 'Difference: ' + difference;
        document.getElementById('product4').innerHTML = 'Product: ' + product;
        document.getElementById('quotient4').innerHTML = 'Quotient: ' + quotient;
    }

