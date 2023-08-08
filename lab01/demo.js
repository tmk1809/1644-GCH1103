// single line comment
/* multiple 
   lines
   comment 
*/

/* 1. trong Javascript nói chung và NodeJS nói riêng thì không
bắt buộc phải viết dấu chấm phẩy ở cuối dòng
*/
// 2. Để in ra text thì dùng nháy đơn hay nháy kép đều được
/* 3. Để chạy code thì mở Terminal (Command Prompt) và gõ
      node file_name hoặc node file_name.js 
*/
console.log ("Hello world !");
console.log ('We are learning Cloud Computing')
console.log ("Today is Thursday !")

a = 17    //integer
b = 3     
x = 3.14  //double (float)
c = a + b
d = a - b
e = a / b
f = a * b 
g = a % b   //get remainder of a division

console.log (c)
console.log ("d = " + d)
console.log (e)
console.log (f)
console.log (g)

full_name = "Nguyen Dinh Tran Long"    //String
email_address = "longndt@fpt.edu.vn"
job = "IT Lecturer"

console.log ("Name : " + full_name)
console.log ("Email: " + email_address)
console.log ("Job: " + job)

check = true   //boolean
gender = 'm'   //character

a = 10
b = a++   // postfix operator:  b=a=10 => a++=a+1=11
c = ++a   // prefix operator :  ++a=a+1=12 => c=a=12

console.log("a = " + a)   
console.log("b = " + b)   
console.log("c = " + c)    

x = 5
x = x + 3  // x += 3
x = x * 5  // x *= 5