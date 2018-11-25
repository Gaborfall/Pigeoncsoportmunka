function event1(x) {
  document.getElementById('text1').value += x;
}

function event2() {
  var x = document.getElementById('text1').value;
  document.getElementById('text1').value = eval(x);
}

function event3() {
  document.getElementById('text1').value = '';
}
