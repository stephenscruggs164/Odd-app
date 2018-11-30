/*for (let current = 21; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break; 
      this is a bad piece of code
      */

function odd(){
    // if a number is divisible by 2 its even
    // if a number is not divisible by 2 its odd
    // always use the precise equals ===
    var currentNumber = Number(prompt("enter a number"));
    if(currentNumber % 2 === 0) {
       
        var msg1 = "The Number " + currentNumber + " is even";
        document.getElementById("num").innerHTML = currentNumber;    
        document.getElementById("result").innerHTML = msg1 ;
    }
    else{
        var msg2 = "The Number " + currentNumber + " is odd";
        document.getElementById("num").innerHTML = currentNumber;
        document.getElementById("result").innerHTML = msg2 ;
    }
}
//  start your engines
/*odd (50);
odd (40);
odd (30);
*/
