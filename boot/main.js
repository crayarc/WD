/*
function add(first, second, callback) {
console.log(first+second);
if (callback) {
  callback(); }
}
function logDone(){
  console.log('done');
}
add(2,3, logDone);
add(4,5)
*/
/* event-driven environment
var a = 1;
console.log('setting this up');

$(document).ready(function() {

  $('button').on('click',function() {
    alert(a);
  });
});
*/
/*closures- retain state and scope after executes
$(document).ready(function() {
var a = 1;

  $('button').on('click', function() {
    a++;
    alert(a);
  });
});
*/
/*scope- variable access
var a = 1;
function foo(){
  a = 2;
  console.log(a);
}
foo();
*/
//context===this
var a = 1;
console.log(a);
