/**arithmetic operators.these are operators that help in doing mathematical operation
 * examples of arithmetic operators are:
 * addition(=)
 * subtraction(-)
 * division(/)
 * multiplication(*)
 * modulus(%)
 */

let x=57;
let y=21;

let total=x+y; //this will add the two variables
let difference=x-y; //this will subtract two variables
let div=x/y;  //this will divide the two variables
let multi=x*y; //this will multiply the two variables
let mod=x%y; //this will provide the remainder of the two variables


/** Alice went to a bookstore and bought 3 books for Ksh120 each. She also bought 2 notebooks for Ksh30 each. If she paid with a Ksh5000 bill, how much change did she receive?**/


let books=3;
let priceBook=120;
let tBooks=books*priceBook;

let notebooks=2;
let priceNotebook=30;
let tNotebooks=notebooks*priceNotebook;

let bill=5000;
let balance= bill-tBooks+tNotebooks;
alert (balance);

/**comparoson operators.are use to compare two values
 ->*examples of comparison are
 ->*greater than (>)
 ->*less than (<)
 ->*greater than or equal to (>=)
 ->*less than or equal to (<=)
 ->*equal to (==)
 ->*not equal to (!=)
 ->*strict equal to (==)
 */

let p=10;
let q=5;

alert(p>q); //greater than
alert(p<q);// less than
alert(p>=q);// greater than or equal to
alert(p<=q);// less than or equal to
alert(p==q);// equal to
alert(p!=q);// not equal to
alert(p===q);// strict equal to
alert(p!==q);// strict not equal to


 
/**In JavaScript, control statements are programming constructs that enable you to control the flow of execution within your code. They determine which code blocks are executed based on specified conditions or how many times certain code blocks are repeated. Control statements in JavaScript include conditional statements (like if, else, switch), loops (like for, while, do-while). */
/**conditional statements
 * examle and syntax
 *     ->if
 *      if(condition)
 * {
 *  excution
 * }
 * 
 * 
 *     ->if else
 * if(condition)
 * {
 * execution
 * }
 * else{
 * execution
 * }
 * 
 * 
 *     ->if else if
 * if(condition)
 * {
 * execution
 * }
 * else if{
 * execution
 * }
 * * else{
 * execution
 * }
 * 
 * 
 * 
 *      ->switch
 */


// if statement example
let num=10;

if(num>=10);
{
    alert(num);
}

// if else statement example
let age=19;

if(age>=20)
{
    alert ("i am an adult");
}

else{
    alert ("i am a still a kid");
}

// if else if statement example
let m=50;

if(m<70)
{
    alert("my number is less than or equql to 49");
}
else if (m==50)
{
    alert("my number is actually equal to 50");
}
else
{
    alert("i just have a number");
}








