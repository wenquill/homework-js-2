//1.1------------------------------------------
const userVar = prompt("Input the number:");
if (userVar == 10) {
    console.log("Правильно!");
} else {
    console.log("Неправильно!")
}

//1.2------------------------------------------
const test = true;
if (test) {
    console.log("True");
} else {
    console.log("False");
}

if (!test) {
    console.log("True");
} else {
    console.log("False");
}

//1.3------------------------------------------
const userPurchase = prompt("Your purchase amount:");
let userDiscount;
let userNewAmount;

if (userPurchase >= 500 && userPurchase < 800) {
    userDiscount = (userPurchase * 3) / 100;
    userNewAmount = userPurchase - userDiscount;
    alert("You`ve got a 3% discount! Now your purchase is " + userNewAmount + " cost.");
} else if (userPurchase >= 800) {
    userDiscount = (userPurchase * 5) / 100;
    userNewAmount = userPurchase - userDiscount;
    alert("You`ve got a 5% discount! Now your purchase is " + userNewAmount + " cost.");
} else {
    alert("Thanks for your purchase!");
}


//2.1------------------------------------------
let startNumber = 25;
let lastNumber = 0;
while (startNumber >= lastNumber) {
    console.log(startNumber);
    startNumber--;
}

startNumber = 25;
do {
    console.log(startNumber);
    startNumber--;
} while (startNumber >= lastNumber)

//2.2------------------------------------------
startNumber = 10;
lastNumber = 50;
while (startNumber <= lastNumber) {
    if (!(startNumber % 5)) {
        console.log(startNumber);
    }
    startNumber++;
}

startNumber = 10;
do {
    if (!(startNumber % 5)) {
        console.log(startNumber);
    }
    startNumber++;  
} while (startNumber <= lastNumber);

//2.3------------------------------------------
let sum = 0;
startNumber = 1;
lastNumber = 100;
while (startNumber <= lastNumber) {
    sum +=startNumber;
    startNumber++;
}
console.log(sum);

sum = 0;
startNumber = 1;
do {
    sum +=startNumber;
    startNumber++;
} while (startNumber <= lastNumber);
console.log(sum);