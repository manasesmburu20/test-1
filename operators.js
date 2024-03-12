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

/*switch sttatement - this statement is used to perform different actions based on different conditions

syntax for switch statement
switch(){
   * case 1;
   * -> execution
   * break;

    *case 2:
    *-> execution
    *break;
         
    *case 3:
    *-> execution
    *break;

    *case n:
    *-> execution
*/

let day=3
let dayName;

switch(day){
    case 1 :
        dayName="monday";
        break;

        case 2 :
            dayName="tuesday";
            break;

            case 3:
                dayName="wednesday";
            break;

            case 4:
                dayName="thursday";
            break;

            case 5:
                dayName="friday";
            break;

            case 6:
                dayName="saturday";
            break;

            case 7:
                dayName="sunday";
            break;
}
alert (dayName);
default:
    dayName=invalid Day;

    /* in this example, it prints the day named based on the value of day.
    if day is 1, it prints  "Monday"; if it is  2, it prints "Tuesday", if it is 3,"wednesday";
    otherwise,it prints "invalid day".*/


    /**loops
     * loops statements in javascript are programming constructs that allow you to execute a block of code repeatedly.
     * they are essential for automating repetetive  tasks, iterating over arrays or objects,and processing data.
     * javascript provides several types of loop statements:
     * 
     *          1-> for loop: the for loop is used when you know the number of iterations before hand.
     * it consists of three parts; initialization, condition and iteration expression.
     * 
     *               syntax
     *        for (initialization; condition; iteration){
      *          //code block to be executed}
      *          
     * 
     *           2-> while loop: the while loop executes a block of code as long as a specified condition
     * evaluates to true.
     * 
     *             syntax
     * 
     *             while(condition) {
     *             //code block to be executed
     *         } 
     * 
     *           3-> do-while loop:similar to the while loop,but it executes the code block atleast once before
     * checking the condition.
     * 
     *              syntax
     *  
     *               do {
     *                 // code block to be executed
     *               while(condition);}
     * 
     */

//exanmples of loops//
    for(let i=0;i<10; i++){
        alert(i);
    }


// while loop
    let num =0;
    while(num<5){
        alert(num);
        i++;

        
//do while
let x=0;
do{
    alert(x);
    x++;
} while(x<20);













          

          








