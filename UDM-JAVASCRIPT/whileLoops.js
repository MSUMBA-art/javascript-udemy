//let i = 1;
//while (i<2) {
 //   console.log(i);
  //  i++;
//}

let numberOfBottles = 99;
while (numberOfBottles >= 0) {
    let bottleWorld = "bottles";
    if (numberOfBottles === 1) {
        bottleWorld = "bottles";
        
    }
     console.log(numberOfBottles + " " + bottleWorld + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWorld + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWorld + " of beer on the wall.");
    
}