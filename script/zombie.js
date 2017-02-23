/*ZOMBIE TEXT ADVENTURE GAME*/


alert("It is the zombie apocalypse. You are looting a store and suddenly a zombie bursts through the door!");
var weapon = prompt("You search around frantically for a weapon. What do you choose? A knife, a hoover or a chicken?");
var randomNumber = Math.round(Math.random());


if(weapon === "knife"){
  alert("Ok, let’s try it! You attack the zombie with your" + " " + weapon + "...");
}
else if(weapon === "hoover"){
  alert("Ok, let’s try it! You attack the zombie with your" + " " + weapon + "...");
}
else if(weapon === "chicken"){
  alert("Ok, let’s try it! You attack the zombie with your" + " " + weapon + "...");
}
else if(weapon === "Knife"){
  alert("Ok, let’s try it! You attack the zombie with your" + " " + weapon + "...");
}
else if(weapon === "Hoover"){
  alert("Ok, let’s try it! You attack the zombie with your" + " " + weapon + "...");
}
else if(weapon === "Chicken"){
  alert("Ok, let’s try it! You attack the zombie with your" + " " + weapon + "...");
}
else{
  alert("You have to choose a weapon from that listed before!");
  var weapon = prompt("What do you choose? A knife, a hoover or a chicken?");
}


if(randomNumber === 1){
  alert("The zombie bites you! Game over...");
}
else{
  alert("You killed the zombie with your" + " " + weapon +"!");
}


alert("Everything around you is destroyed after your battle against the zombie. There is nothing left to do here. You have to go away now...")
var direction = prompt("There is no way that you can use the main door: the lock was broken during the battle and the door is locked now. You can try to use the back door or a window. What do you choose?");

