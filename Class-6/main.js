//function square(num) { //parenthesis ka function hota hai parameters accept krna  num: parameter
//let x = 10;
//console.log(num * num);
//}
//square(3)  //3: argument
//square(15)
//square(6)
//square("hello") //NaN: not a number
// aik piece of code ko jb need ho tb call krna is called a function 
// {}: block of code
//area of circle = 3.142 * r^2
// my way
//function areaofcircle(radius, pi) {
//return (pi*radius*radius)
//}
//const radius = 2
//const pi = Math.PI
//console.log("The area of the circle is " + areaofcircle(radius, pi))
//in class
function areaofCircle(radius) {
    var pi = 3.142;
    var circleArea = pi * radius * radius;
    console.log(circleArea);
}
areaofCircle(10);
