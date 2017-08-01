  /*Codecademy
  function main() {
    $('.skillset').hide();
    $('.skillset').fadeIn(1000);
    $('.projects').hide();
    $('.projects-button').on('click', function(){
      //$(this).next().toggle();
      $(this).toggleClass('active');
      $(this).text("Projects Viewed");
      $(this).next().slideToggle(400);
    });
  }
  $(document).ready(main);
  */
  1
Javascript: Event handling, DocumentObjectModel traversal, DOM manipulation, Send/recieve data w/o page refresh (ajax)
 jQuery(document).ready(function(){
   .slideToggle()

   jQuery(#about).click(function(){ jQuery(".about-placeholder").load(.html .text) })
 })
  2

  6
Console
Window- has everything
document- has all info of current page
document.title = "change to this"
document.getElementByID("id name").innerHTML = "this"
variables
var ourheadline = document.getELementbyID("")
ourheadline.innerHTML = ""

Text Editor
var ourHeadline = document.getELementbyID("our-headline");
var listitems = document.getELementbyID("our-list").getElementsByTagName("li");
gets our list elements and tag elements inside that list (ul/ol & li)

for(i = 0 ; i < listitems.length; i++) {
  listitems[i].addEventListener("click", activateItem);("action", function)
}
function activateItem() {
  ourHeadline.innerHTML = this.innerHTML;
}

Event Delegation
functionname.target
functionname.target.nodeName = "LI"
(i = 0; i < functionname.target.parentNode.children.length; i ++)
instead of var ourlist = document.getELementbyID("our-list")
use
var ourlist = document.querySelector("#our-list") select one elements

instead of var ourlist = document.getELementbyID("our-list")
use
var ourlist = document.querySelectorAll("#our-list li") select all elements

  7
class: reusable blueprint
object {}
//Contstructive function
function Person(fullName, favcolor) {
  //method this refer to object being created
this.name=fullName;
this.color = favcolor;
  this.greet=function(){
    console.log("Hello " + this.name + "color " + this.color);
  }
}

var john = new Person("jon", "blue");
john.greet();
var jane = new Person("jane", "green");
jane.greet();

Udemy
p innerHTML = "<em>"+ msg + "</em>";
try { execute statements inside}
catch(e){find errors console.error(e)}
finally{execute regardless if try works}
