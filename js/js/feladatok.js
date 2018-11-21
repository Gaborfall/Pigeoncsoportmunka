var tizedes = false;
var muvelet = 0;

function egy() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '1');
}

function ket() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '2');
}

function har() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '3');
}

function negy() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '4');
}

function ot() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '5');
}

function hat() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '6');
}

function het() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '7');
}

function nyolc() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '8');
}

function kil() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '9');
}

function nul() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '0');
}

function szelet1() {
  var  seged = document.querySelector('#eredmeny').innerHTML;
  seged = seged.slice(0, ((seged.length) - 2));
  if (tizedes === true) {
    seged = parseFloat(seged);
  } else {
    seged = parseInt(seged, 10);
  }
  return seged;
}

function szelet2() {
  var seged2 = document.querySelector('#eredmeny').innerHTML;
  seged2 = seged2.replace(szelet1(), '');
  seged2 = seged2.slice(3);
  if (tizedes === true) {
    seged2 = parseFloat(seged2);
  } else {
    seged2 = parseInt(seged2, 10);
  }
  return seged2;
}

function szelet3() {
  var seged = document.querySelector('#eredmeny').innerHTML;
  seged = seged.slice(4);

  if (tizedes === true) {
    seged = parseFloat(seged);
  } else {
    seged = parseInt(seged, 10);
  }
  return seged;
}

function szelet4() {
  var seged = document.querySelector('#eredmeny').innerHTML;
  seged = seged.slice(3);
  if (tizedes === true) {
    seged = parseFloat(seged);
  } else {
    seged = parseInt(seged, 10);
  }
  return seged;
}

function plusz() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + ' + ');
  muvelet = 1;
}

function tizpont() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + '.');  
  tizedes = true;
}

function szor() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + ' * ');
  muvelet = 3;
}

function kivon() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + ' - ');
  muvelet = 2;
}

function oszt() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + ' / ');
  muvelet = 4;
}

function hatvany() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + ' ^ ');
  muvelet = 5;
}
function szin() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + 'sin ');
  muvelet = 6;
}

function kosz() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + 'cos ');
  szelet1();
  muvelet = 7;
}

function tan() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + 'tg ');
  muvelet = 8;
}
function log() {
  document.querySelector('#eredmeny').innerHTML = (document.querySelector('#eredmeny').innerHTML + 'ln ');
  muvelet = 9;
}

function torles() {
  document.querySelector('#eredmeny').innerHTML = '';
  document.querySelector('#eredmeny2').innerHTML = '';
}

function megoldas() {
  var numberOne = szelet1();
  var numberTwo = szelet2();
  var numberThree = szelet3();
  var numberFour = szelet4();
    switch (muvelet) {
      case 1: document.querySelector('#eredmeny2').innerHTML =parseFloat(numberOne+numberTwo);
        break;
      case 2: document.querySelector('#eredmeny2').innerHTML =parseFloat(numberOne-numberTwo);
        break;
      case 3: document.querySelector('#eredmeny2').innerHTML =parseFloat(numberOne*numberTwo);
        break;
      case 4: document.querySelector('#eredmeny2').innerHTML =parseFloat(numberOne/numberTwo);
        break;
      case 5: document.querySelector('#eredmeny2').innerHTML =parseFloat(numberOne**numberTwo);
        break;
      case 6: document.querySelector('#eredmeny2').innerHTML =parseFloat(Math.sin(numberThree*Math.PI/180));
        break;
      case 7: document.querySelector('#eredmeny2').innerHTML =parseFloat(Math.cos(numberThree*Math.PI/180));
        break;
      case 8: document.querySelector('#eredmeny2').innerHTML =parseFloat(Math.tan(numberFour));
        break;
      case 9: document.querySelector('#eredmeny2').innerHTML =parseFloat(Math.log(numberFour));
    }
}

function akosCalculator() {
  var number1a = document.getElementById('number1a');
  var parseNumber1a = parseInt(number1a.value, 10);
  var operationa = document.getElementById('operationa').value;
  var number2a = document.getElementById('number2a');
  var parseNumber2a = parseInt(number2a.value, 10);
  var resulta = eval(parseNumber1a + operationa + parseNumber2a);
  document.getElementById('resulta').innerHTML = resulta;
}

function daniCalculator() {
  var number1d = document.getElementById('number1d');
  var parseNumber1d = parseInt(number1d.value, 10);
  var operationd = document.getElementById('operationd').value;
  var number2d = document.getElementById('number2d');
  var parseNumber2d = parseInt(number2d.value, 10);
  var resultd = eval(parseNumber1d + operationd + parseNumber2d);
  document.getElementById('resultd').innerHTML = resultd;
}
//Gabor
function pluszg () {
  document.szamologep.eredmeny.value = document.szamologep.elsorublika.value * 1 + document.szamologep.masodikrublika.value * 1 ;
  }
  function minuszg () {
  document.szamologep.eredmeny.value = document.szamologep.elsorublika.value - document.szamologep.masodikrublika.value;
  }
  function szorg () {
  document.szamologep.eredmeny.value = document.szamologep.elsorublika.value * document.szamologep.masodikrublika.value;
  }
  function osztg () {
document.szamologep.eredmeny.value = document.szamologep.elsorublika.value / document.szamologep.masodikrublika.value;
}


