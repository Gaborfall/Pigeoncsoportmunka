var pos = 1;

function textboxPos(a) {
  pos = a;
}

function calculate() {
  switch (document.querySelector('#operations').value) {
  case 'f1': document.querySelector('#num3').value = parseFloat(document.querySelector('#num1').value) + parseFloat(document.querySelector('#num2').value); break;
  case 'f2': document.querySelector('#num3').value = parseFloat(document.querySelector('#num1').value) - parseFloat(document.querySelector('#num2').value); break;
  case 'f3': document.querySelector('#num3').value = parseFloat(document.querySelector('#num1').value) * parseFloat(document.querySelector('#num2').value); break;
  case 'f4': document.querySelector('#num3').value = parseFloat(document.querySelector('#num1').value) / parseFloat(document.querySelector('#num2').value); break;
  case 'f5': document.querySelector('#num3').value = parseFloat(document.querySelector('#num1').value) % parseFloat(document.querySelector('#num2').value); break;
  case 'f6': document.querySelector('#num3').value = parseFloat(document.querySelector('#num1').value) ** parseFloat(document.querySelector('#num2').value); break;
  }
  document.querySelector('#num1').value = '';
  document.querySelector('#num2').value = '';
}

function numberFill(a) {
  textsel = 'num' + pos;
  document.querySelector('[name=' + textsel + ']').value += a;
}

