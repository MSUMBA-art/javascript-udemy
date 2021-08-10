// function getMilk(money) {
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");

//   var numberOfBottles = money / 1.5;

//   console.log("Please buy " + numberOfBottles  + " bottles of milk");
//   console.log("moveUp");
//   console.log("movRight");
//   console.log("moveRight");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   return money % 1.5;
// }

// var change = getMilk(4);

// console.log(change)
 
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height)  {
    var bmi = weight / (Math.pow(height, 2));
    return Math.round(bmi) ;
}

var bmi = bmiCalculator(65, 1.8); 
console.log("The answer is:" + bmi);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
