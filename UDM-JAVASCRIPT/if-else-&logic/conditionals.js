// // var n = Math.random();
// // n = n * 6;
// // n = Math.floor(n) + 1;

// // console.log("The answer is: " + n);

// console.log("What is your name");
// console.log("What is their name");

// var loveScore = Math.random() * 100;
// loveScore = Math.random(loveScore) + 1;
// if (loveScore > 100) {

//   if (loveScore > 30 && loveScore <= 70) {
//     console.log("Your Love Score is " + loveScore + " %" + "You love him");
//   }

//   if (loveScore => 30 ) {
//     console.log("Your Love Score is " + loveScore + " %");
//   }
// } else {
//     console.log("Your Love Score is " + loveScore + " %" + " yes");
// }

// // COMPARATORS

// /* === is equal to
// !== is not equal to
// > is greater than
// < is lesser than
// >= is greater or equal to
// <= is lesser or equal to
// && and
// || or
// ! not
// */

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year";
      } else {
        return "Not a leap year";
      }
    } else {
      return "Leap year";
    }
  } else {
    return "Not leap year";
  }
}

isLeap();
