//I have chosen to implement code to calculate mortgage payment. To ensure the formula is clear, I will give the variables short names, and explain them in the adjacent comment.

const P= 85000 //The principal, this is the amount of money you borrowed.
const r= (5/100)/12 //The monthly interest rate
const n= 30*12 //the number of payments. We take 30 years, and multiply this by 12 to get the monthly payment, thus the number of payments

let M; //we will now calculate M. M stands for the amount of money you need to pay per month

//To ensure the maths run correctly, I will take the components one by one and store them in variables in alphabetical order. The whole formula is M = P*[ r* (1 + r)^n/(1 + r)^n - 1 ]

var a= (1+r)^n //First part in the brackets to the power of n
var b= r*a //We multiply the first part by r to get the part above the divider
var c= (1+r)^n //Part in the brackets under divisor to the power of n
var d= c -1 //We subtract 1 from the bracket part, to complete the part under the divider
var e = b/d //We divide the top part by the bottom part as stated in the formula

M= P*(e) //Lastly, we complete the formula by multiplying the result by P
console.log (M) //Print the result