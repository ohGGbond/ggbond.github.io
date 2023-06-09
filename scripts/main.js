let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/csgoG2.png') {
      myImage.setAttribute('src', 'images/csgo2.jpg');
    } else {
      myImage.setAttribute('src', 'images/csgoG2.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '欢迎访问！' + myName;
  }


if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎访问！' + storedName;
  }


myButton.onclick = function() {
    setUserName();
 }
 
 function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '欢迎访问！' + myName;
    }
  }
  