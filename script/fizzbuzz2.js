/*ADVANCED FIZZBUZZ*/


var randomNumber = Math.round( Math.random() * 15);
if(randomNumber%3 === 0 && randomNumber != 0){
  if(randomNumber%5 === 0){
    alert("fizzbuzz");
  }
  else {
    alert("fizz");
  }
}
else if (randomNumber%5 === 0 && randomNumber != 0){
  alert("buzz");
}
else {
  console.log(randomNumber);
}


