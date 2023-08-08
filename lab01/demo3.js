//function
//1. function without parameter and no return
function sayHello() {
   console.log ("Hello world")
}
sayHello()   //function call
//2. function without parameter but has "return"
function greenwich() {
   return "Greenwich Vietnam !"
}
console.log("Hello " + greenwich())
//3. function with parameter and no return
function calculateSum(a, b) {
   //c = a + b
   //console.log ("Total: " + c)
   console.log ("Total: " + (a+b))
}
calculateSum(10, 15)
//4. function with parameter and has "return"
function sayHi (name) {
   return name
}
console.log ("Welcome " + sayHi("Tuan Hung") + " to Greenwich Vietnam")