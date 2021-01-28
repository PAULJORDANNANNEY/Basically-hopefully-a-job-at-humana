
1
2
3
4
5
6
7
8
9
10
11
12
13
window.onload = initClock;
 
function initClock() {
  var now = new Date();
  var hr  = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  if (min < 10) min = "0" + min;  // insert a leading zero
  if (sec < 10) sec = "0" + sec;
  document.getElementById('clockDisplay').innerHTML
        = "Time is " + hr + ":" + min + ":" + sec;
  setTimeout('initClock()', 500);
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}