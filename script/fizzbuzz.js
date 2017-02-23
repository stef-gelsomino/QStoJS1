/*SIMPLIFIED FIZZBUZZ*/


var randomNumber = Math.round( Math.random() * 5 );
if(randomNumber%3 === 0){
  alert("fizz");
}
else if(randomNumber%5 === 0){
  alert("buzz");
}
else{
  console.log(randomNumber);
}


