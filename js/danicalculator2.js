
/* function number1InputButton(){
    document.getElementById("number1").value = document.getElementById("1").value
} */

/* function number1Input() {
    var firstInput = document.getElementById("1").value + document.getElementById("2").value
    document.getElementById("number1").value = firstInput
} */

function number2Input() {

    var elements = document.getElementsByClassName("first-numbers");
    elements[0].style.display = 'none';
    elements[1].style.display = 'none';
    elements[2].style.display = 'none';
    elements[3].style.display = 'none';
    elements[4].style.display = 'none';
    elements[5].style.display = 'none';
    elements[6].style.display = 'none';
    elements[7].style.display = 'none';
    elements[8].style.display = 'none';
    elements[9].style.display = 'none';
    elements[10].style.display = 'none';

    var elements = document.getElementsByClassName("second-numbers");
    elements[0].style.display = 'inline';
    elements[1].style.display = 'inline';
    elements[2].style.display = 'inline';
    elements[3].style.display = 'inline';
    elements[4].style.display = 'inline';
    elements[5].style.display = 'inline';
    elements[6].style.display = 'inline';
    elements[7].style.display = 'inline';
    elements[8].style.display = 'inline';
    elements[9].style.display = 'inline';
    elements[10].style.display = 'inline';

}

function number1Input() {

    var elements = document.getElementsByClassName("second-numbers");
    elements[0].style.display = 'none';
    elements[1].style.display = 'none';
    elements[2].style.display = 'none';
    elements[3].style.display = 'none';
    elements[4].style.display = 'none';
    elements[5].style.display = 'none';
    elements[6].style.display = 'none';
    elements[7].style.display = 'none';
    elements[8].style.display = 'none';
    elements[9].style.display = 'none';
    elements[10].style.display = 'none';

    var elements = document.getElementsByClassName("first-numbers");
    elements[0].style.display = 'inline';
    elements[1].style.display = 'inline';
    elements[2].style.display = 'inline';
    elements[3].style.display = 'inline';
    elements[4].style.display = 'inline';
    elements[5].style.display = 'inline';
    elements[6].style.display = 'inline';
    elements[7].style.display = 'inline';
    elements[8].style.display = 'inline';
    elements[9].style.display = 'inline';
    elements[10].style.display = 'inline';

}


function fPlus() {
    document.getElementById("operation").value = "+"
}

function fMinus() {
    document.getElementById("operation").value = "-"
}

function fMult() {
    document.getElementById("operation").value = "*"
}

function fDiv() {
    document.getElementById("operation").value = "/"
}

function fExp() {
    document.getElementById("operation").value = "**"
}

function fRem() {
    document.getElementById("operation").value = "%"
}




function fEq() {
    
    var operationValue = document.getElementById("operation").value;

    var n1 = document.getElementById("number1");
    var parsen1 = parseFloat(number1.value);


    var n2 = document.getElementById("number2");
    var parsen2 = parseFloat(number2.value);

    resultValue = eval(parsen1 + operationValue + parsen2);

    document.getElementById("result").value = resultValue;

}


function fClear() {

    number1value = "";
    number2value = "";

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result").value = "";

}


var number1value = "";

var number2value = "";


function one() {
    number1value = number1value + document.getElementById("1").value
    document.getElementById("number1").value = number1value
}

function two() {
    number1value = number1value + document.getElementById("2").value
    document.getElementById("number1").value = number1value
}
function three() {
    number1value = number1value + document.getElementById("3").value
    document.getElementById("number1").value = number1value
}
function four() {
    number1value = number1value + document.getElementById("4").value
    document.getElementById("number1").value = number1value
}
function five() {
    number1value = number1value + document.getElementById("5").value
    document.getElementById("number1").value = number1value
}
function six() {
    number1value = number1value + document.getElementById("6").value
    document.getElementById("number1").value = number1value
}
function seven() {
    number1value = number1value + document.getElementById("7").value
    document.getElementById("number1").value = number1value
}
function eight() {
    number1value = number1value + document.getElementById("8").value
    document.getElementById("number1").value = number1value
}
function nine() {
    number1value = number1value + document.getElementById("9").value
    document.getElementById("number1").value = number1value
}
function zero() {
    number1value = number1value + document.getElementById("0").value
    document.getElementById("number1").value = number1value
}
function fDot() {
    number1value = number1value + document.getElementById("dot").value
    document.getElementById("number1").value = number1value
}





function sone() {
    number2value = number2value + document.getElementById("s1").value
    document.getElementById("number2").value = number2value
}

function stwo() {
    number2value = number2value + document.getElementById("s2").value
    document.getElementById("number2").value = number2value
}
function sthree() {
    number2value = number2value + document.getElementById("s3").value
    document.getElementById("number2").value = number2value
}
function sfour() {
    number2value = number2value + document.getElementById("s4").value
    document.getElementById("number2").value = number2value
}
function sfive() {
    number2value = number2value + document.getElementById("s5").value
    document.getElementById("number2").value = number2value
}
function ssix() {
    number2value = number2value + document.getElementById("s6").value
    document.getElementById("number2").value = number2value
}
function sseven() {
    number2value = number2value + document.getElementById("s7").value
    document.getElementById("number2").value = number2value
}
function seight() {
    number2value = number2value + document.getElementById("s8").value
    document.getElementById("number2").value = number2value
}
function snine() {
    number2value = number2value + document.getElementById("s9").value
    document.getElementById("number2").value = number2value
}
function szero() {
    number2value = number2value + document.getElementById("s0").value
    document.getElementById("number2").value = number2value
}
function fsDot() {
    number2value = number2value + document.getElementById("sdot").value
    document.getElementById("number2").value = number2value
}
