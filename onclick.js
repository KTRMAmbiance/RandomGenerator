document.getElementById("pushbutton").onclick = function() {
var number = Math.floor(Math.random() * names.length);
document.getElementById("namedisplay").innerHTML = names[number];
switch (Math.floor(Math.random() * 13)) {
case 1:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#E53, #C10)";
break;
case 2:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#4E4, #1C0)";
break;
case 3:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#35E, #01C)";
break;
case 4:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#56A, #238)";
break;
case 5:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#973, #650)";
break;
case 6:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#499, #177)";
break;
case 7:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#C4C, #A1A)";
break;
case 8:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#F2C, #D0A)";
break;
case 9:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#8FC, #5B8)";
break;
case 10:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#3AA, #088)";
break;
case 11:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#4CF, #19C)";
break;
case 12:
document.getElementById("namecardbg").style.backgroundImage = "radial-gradient(#4D4, #3B3)";
}
}
