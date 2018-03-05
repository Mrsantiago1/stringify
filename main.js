//
// var button = document.getElementById("butt");
// // var palindrome = document.getElementById("display");
//
//
//
//   button.onclick=function(){
// function checkPalindrom(str) {
//     return str == str.split('').reverse().join('');
//     str.innerHTML += "<h1>+str+</h1>"
// }
// }
//user can write words in the input bar
//user can click the button made
//user change his word/words appear in strings after the click

document.getElementById("checkPalindrom")[0].onclick = check


function check (){
  const str = document.getElementById("TextHere")[0].value
  console.log(str == str.split('').reverse().join(''))
}
