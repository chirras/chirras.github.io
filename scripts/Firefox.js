var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function clickButton() {
  var user = prompt("Enter here to change username");
  if (user != null) {
  	myHeading.innerHTML = 'Mozilla Firefox, ' + user;
  }
  if (user == "") {
  	myHeading.innerHTML = 'Mozilla Firefox, Satish';
  }

}