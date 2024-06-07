function number(n) {
    if (n >= 80 && n <= 100) {
        console.log('Your grade: A+');
    }
    else if (n >= 70 && n <= 79) {
        console.log("Your grade: A");
    }
    else if (n >= 60 && n <= 69) {
        console.log("Your grade: B");
    }
    else if (n >= 50 && n <= 59) {
        console.log("Your grade: C");
    }
    else if (n >= 40 && n <= 49) {
        console.log("Your grade: D");
    }
    else {
        console.log("You are fail");
    }
    return 'You entered:' + n;
}
var myNumber = number(55);
console.log(myNumber);
