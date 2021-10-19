var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/bus.jpeg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name')

    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome! ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let myName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome! ' + myName;
}

myButton.onclick = function() {
    setUserName();
}