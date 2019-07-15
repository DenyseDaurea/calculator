/* Variable declaration*/

var x = 0;                  //the variable that holds the first operand
var xs = "0";
var y = 0;                  //the variable that holds the second operand
var ys = "0";
var r = 0;                  //the variable that holds the result
var op = "none";             //the variable that holds the math operator

/* getnumber is a function that updates x new entry when no oparator is yet choosen. When the operator is set, it updates y. */

function getnumber(i) {
    if(r !== 0)             //If the result is set it cleans everything and start anew.
        clean();
    if(op === "none") {     //it updates the first operand if no operator is set.
        xs = xs.concat(i);
        x = Number(xs);
        document.getElementById("monitor").innerHTML = x.toString();
    } 
    else if(op != "none") { //it updates the second operand if the oparator is set.
        ys = ys.concat(i);
        y = Number(ys);
        document.getElementById("monitor").innerHTML = x.toString() + op + y.toString();
    } 
}

/* getop() is a function that sets the choosen operator in the op variable. 
if op is set, it calls for getresult() to do the calculation. */

function getop(j) {
    if(op != "none"){
        getresult();
        op = j;
    }
    else{
        op = j;
        document.getElementById("monitor").innerHTML= x.toString() + op;
    } 
}

/* getresult() is a function that is called to do calcutations. 
It does so by checking the operator that was set and then performs the oparation on x and y */  

function getresult() {
    switch(op){
        case "none":        // If no operator is set the result is equal to x
            r = x;
            document.getElementById("monitor").innerHTML = r.toString();
            break;
        case "+":
            r = x + y;
            document.getElementById("monitor").innerHTML = r.toString();
            break;
        case "-":
            r = x - y;
            document.getElementById("monitor").innerHTML = r.toString();
            break;
        case "x":
            r = x * y;
            document.getElementById("monitor").innerHTML = r.toString();
            break;
        case "^":
            r = Math.pow( x , y );
            document.getElementById("monitor").innerHTML = r.toString();
            break;
         case "/":
            if(y===0){
                clean();
                document.getElementById("monitor").innerHTML = "Error";
            }
            else{
                r = x / y;
                document.getElementById("monitor").innerHTML = r.toString();
            }
            break;
        case "%":
            if(y===0){
                clean();
                document.getElementById("monitor").innerHTML = "Error";
            }
            else{
                r = x % y;
                document.getElementById("monitor").innerHTML = r.toString();
            }
            break;
            
        default:
            break;
    }
    x = r;              // After the operation x holds the result to allow a recursive operation
}

/* This function changes the sign of a number by multiplying it by -1. 
It checks if the operator is set to know for which operand the sign is to be changed */

function changesign() {
    if( op === "none") {
        x = -1 * x;
        document.getElementById("monitor").innerHTML = x.toString();
    }
    else {
        y= -1 * y ;
        document.getElementById("monitor").innerHTML = x.toString() + op +"("+ y.toString()+")";
    }
}

/* This function resets the calculator to initial state by zeroing all operands, 
setting the op variable to none and the monitor to 0 */

function clean() {
    x = 0;
    xs = "0";
    y = 0;
    ys = "0";
    r = 0;
    op = "none";
    document.getElementById("monitor").innerHTML = x.toString();
}

// End of script.
// I left many bugs willingly in this script. We will correct them along the way following your progress in JavaScript.
// Good luck!!!