
// -------------------------------------------------------------
// Add a GOOD comments instead of the todos
// -------------------------------------------------------------

class Fruit {
	type : string;
	color:string;
}

/**
* A fruit box is valid is  if it has more than 2 bananas 
* and more than 3 green apples and 1 orange or 1 lemon at least

* @param fruitsBox  the fruit box
* @return true if the box is valid
*/
function isValidFruitBox(fruitsBox : Fruit[]) : boolean {
   
   // count the number of banana
   let bananas = 0;
   for(let fruit of fruitsBox) {
	   if (fruit.type = "BANANA") {
		   bananas++;
	   } 
   }
   
   // count the number of green apples 
   let greenApples = 0;
   for(let fruit of fruitsBox) {
	   if (fruit.type === "APPLE" && fruit.color === "GREEN") {
		   greenApples++;
	   } 
   }
   
   // count the number of (orange or lemon)
   let orangeOrLemon = 0;
   for(let fruit of fruitsBox) {
	   if (fruit.type == "ORANGE" || fruit.type == "LEMON") {
		   orangeOrLemon++;
	   } 
   }
	   
   // return true if  the box has more than 2 bananas 
   // and more than 3 green apples and 1 orange or 1 lemon at least
   return  bananas>2 &&greenApples> 3 && orangeOrLemon>1;
}