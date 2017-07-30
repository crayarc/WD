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
