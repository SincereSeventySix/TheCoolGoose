let picHold = document.getElementById('picHold');
let innerMess = document.getElementById('innerMess');
let btn = document.getElementById('btn');
let title = document.getElementById('title');

btn.onclick = seeGeese;

const newMsg = [
  "Cool in the air...",
  "Really Cool on Water...",
  "Still Cool on Land...",
  "Even Cool a long time ago...",
  "Planes are just so cool...",
  "But this is the coolest...",
  "The Coolest Plane in the World."
];

const newMsg2 = [
  "Another?",
  "More?",
  "One More?",
  "Yes! More!",
  "MORE!!",
  "See More?",
  "Start Again?"
]; //array 4

const geeseCount = [0,1,2,3,4,5,6];//array1
const geesePics = ['b','c','d','e','f','g','a'];// array2

function seeGeese() {
  let num = 0;
     if (btn.innerHTML == newMsg2[5]) {
       changePics(num, geeseCount, geesePics, newMsg, newMsg2);
     } else if(btn.innerHTML == newMsg2[0]) {
       num = num + 1;
       changePics(num, geeseCount, geesePics, newMsg, newMsg2);
     } else if (btn.innerHTML == newMsg2[1]){
       num = num + 2;
       changePics(num, geeseCount, geesePics, newMsg, newMsg2);
     } else if (btn.innerHTML == newMsg2[2]) {
       num = num + 3;
       changePics(num, geeseCount, geesePics, newMsg, newMsg2);
     } else if (btn.innerHTML == newMsg2[3]){
       num = num + 4;
       changePics(num, geeseCount, geesePics, newMsg, newMsg2);
     } else if (btn.innerHTML == newMsg2[4]){
       num = num + 5;
       changePics(num, geeseCount, geesePics, newMsg, newMsg2);
     } else if (btn.innerHTML == newMsg2[5]){
       num = num + 6;
       changePics(num, geeseCount, geesePics, newMsg, newMsg2);
     }
  }

function changePics(index,array1,array2,array3,array4){
    let gooseCount = index;
        if (gooseCount == array1[gooseCount]) {
              picHold.style.backgroundImage="url("+array2[gooseCount]+".jpeg)";
              innerMess.innerHTML = array3[gooseCount];
              btn.innerHTML = array4[gooseCount];
         }
      }

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

function devMessage() {
  alert("Still Working On It:)");
}
