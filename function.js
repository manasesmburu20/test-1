/**
 * Functions in js- functions are the main "building block"of the program.
 * They allow the code to be called many times without repetition.
 * we've already seen examples of built-in functions,like alert(message)
 * But we can create functions of our own as well.
 * Therefore in Js. function are block of codes that be defined and called
 * to perform a specific task.
 ------------------function declaration-----------
 Function declaration define a name function using the function keyword.

 syntax
         function FunctionName(){

        }
 */

// example
function showMessage(){
    alert("Hello Everyone");
    alert()
 }
 /**
  * In the example above,the function keyword goes first,then the name of the function,
  * then a list of parameters between the parentheses(comma-separated,empty in the example above,)
  * we'll see examples later)and finaly the code of the function ,also named"the function body",
  * between curly braces.
            function name(parameter1,parameter2,....parameter)
  */

 showMessage()

 
//function that adds two numbers
function add(a,b){
    return a+b;

}

//function to calculate the square of a number
function sqr(num){
    return num * num; 
    }

    //function to caqlculate the sum of two numbers and then the square of the results
    function addAndSquare(x,y){

        //we will call the add fuunction to add x and y
        var sum = add(x,y)

        //we will call the square function to calculate the square of the sum
        var result = square(sum);

        return result;
    } 
    
