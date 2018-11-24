var tizedesm = false;
var muveletm = 0;
var numnum = true;

function egym() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '1';
  } else {
    document.querySelector('#num2m').value += '1';
  }
}

function ketm() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '2';
  } else {
    document.querySelector('#num2m').value += '2';
  }
}

function harm() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '3';
  } else {
    document.querySelector('#num2m').value += '3';
  }
}

function negym() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '4';
  } else {
    document.querySelector('#num2m').value += '4';
  }
}

function otm() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '5';
  } else {
    document.querySelector('#num2m').value += '5';
  }
}

function hatm() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '6';
  } else {
    document.querySelector('#num2m').value += '6';
  }
}

function hetm() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '7';
  } else {
    document.querySelector('#num2m').value += '7';
  }
}

function nyolcm() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '8';
  } else {
    document.querySelector('#num2m').value += '8';
  }
}

function kilm() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '9';
  } else {
    document.querySelector('#num2m').value += '9';
  }
}

function nulm() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '0';
  } else {
    document.querySelector('#num2m').value += '0';
  }
}

function pluszm() {
  numnum = false;
  document.querySelector('#labelm').innerHTML = ' + ';
  muveletm = 1;
}

function tizpontm() {
  if (numnum === true)  {
    document.querySelector('#num1m').value += '.';
  } else {
    document.querySelector('#num2m').value += '.';
  }
  tizedesm = true;
}

function szorm() {
  numnum = false;
  document.querySelector('#labelm').innerHTML = ' * ';
  muveletm = 3;
}

function kivonm() {
  numnum = false;
  document.querySelector('#labelm').innerHTML = ' - ';
  muveletm = 2;
}

function osztm() {
  numnum = false;
  document.querySelector('#labelm').innerHTML = ' / ';
  muveletm = 4;
}

function hatvanym() {
  numnum = false;
  document.querySelector('#labelm').innerHTML = ' ^ ';
  muveletm = 5;
}

function torlesm() {
  document.querySelector('#num1m').value = '';
  document.querySelector('#num2m').value = '';
  document.querySelector('#labelm').innerHTML = 'művelet';
  document.querySelector('#label2m').innerHTML = 'eredmény';
}

function megoldasm() {
  var numberOne = document.querySelector('#num1m').value;
  var numberTwo = document.querySelector('#num2m').value;

  switch (muveletm) {
  case 1: document.querySelector('#label2m').innerHTML = parseFloat(numberOne + numberTwo);
    break;
  case 2: document.querySelector('#label2m').innerHTML = parseFloat(numberOne - numberTwo);
    break;
  case 3: document.querySelector('#label2m').innerHTML = parseFloat(numberOne * numberTwo);
    break;
  case 4: document.querySelector('#label2m').innerHTML = parseFloat(numberOne / numberTwo);
    break;
  case 5: document.querySelector('#label2m').innerHTML = parseFloat(numberOne ** numberTwo);
    break;
  default:document.querySelector('#label2m').innerHTML = ' ';
  }
}


