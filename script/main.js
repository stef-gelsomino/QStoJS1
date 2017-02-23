/*JUST STARTED*/


alert("Hello World!");
confirm("I love JavaScript");
prompt("Do you want to learn JavaScript?");


/*COMMON OPERATORS*/


2 + 2;
/*
4
*/
3 * 2;
/*
6
*/
4 / 3;
/*
1.3333333333333333
*/
6 - 8;
/*
-2
*/
10%3;
/*
1
*/
(3 + 2) * 5;
/*
25
*/
3 + 2 * 5;
/*
13
*/
30 - 2 * 3;
/*
24
*/
(30 - 2) * 3;
/*
84
*/


/*CONSOLE*/


console.log("Hello World!")
console.warn("Warning!")
console.error("Error!")


/*PRIMITIVE DATA TYPES*/


2 + "2";
/*
22
*/
"22";
"Hello" + "World";
/*
HelloWorld
*/
"Hello" + " " + "World";
/*
Hello World
*/
10 > 2;
/*
true
*/
10 < 2;
/*
false
*/
typeof(10 < 2);
/*
boolean
*/
typeof(2 + 2);
/*
number
*/
typeof(2 + "2");
/*
string
*/


/*VARIABLES*/


var a = 2;
/*
string
*/
typeof(a);
/*
number
*/
var b = 5;
a + b;
/*
7
*/
typeof(a + b);
/*
number
*/
var myName = "Jack";
alert(myName);
/*
undefined
*/
var myFavoriteMovie = prompt("What is your favorite movie?");
alert("Your favorite movie is" + " " + myFavoriteMovie + "!");
var randomNumber = Math.random();
alert(randomNumber);
var randomNumber2 = Math.random() * 7;
alert(randomNumber2);


/*CONTROL FLOW*/


var answer = prompt("Was ist die Hauptstadt Deutschlands?");
if(answer === "Berlin"){
  alert("Richtig! Du gewinnst Currywurst mit Pommes!");
}
else{
  alert("Schade," + " " + answer + " " + "ist falsch...");
}
var favoriteAnimal = prompt("What is your favorite animal?");
if(favoriteAnimal === "cat"){
  alert("Cats are awesome!");
}
else if(favoriteAnimal === "Cat"){
  alert("Cats are awesome!");
}
else if(favoriteAnimal === "dog"){
  alert("Dogs are okay");
}
else if(favoriteAnimal === "Dog"){
  alert("Dogs are okay...");
}
else{
  alert("Good choice!");
}