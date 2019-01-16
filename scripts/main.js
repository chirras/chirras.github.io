function changeImage(){

	var myImage = document.querySelector('img');
	myImage.onclick = function() {
    	var mySrc = myImage.getAttribute('src');
    	if(mySrc === 'images/Viz2.png') {
      		myImage.setAttribute ('src','images/Viz3.gif');
    	} 
    	else {
      		myImage.setAttribute ('src','images/Viz2.png');
    	}
	}

}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function clickButton() {
  var user = prompt("Enter here to change username");
  if (user != null) {
  	myHeading.innerHTML = 'Data Visualization, ' + user;
  }
  if (user == "") {
  	myHeading.innerHTML = 'Data Visualization, Satish';
  }

}


function vizTool() {
  var tool = prompt("Please enter your favorite platform");
  if (tool != null) {
  	document.getElementById("viz").innerHTML = tool + " is my favorite platform!";
  }
  if (tool == "") {
  	document.getElementById("viz").innerHTML = 'D3 is my favorite platform!';
  }

}


