//Exercise 1
/*Part 1
There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.*/
let names =["Sofia","David","Juan"];
console.log(names);

/*Part 2
Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?*/
names.push("Sara","Aguistin");
names.shift();
console.log(names);

//Part 3
/*It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?*/
names.splice(1, 0, "Renata","Elena");
console.log(names)


/*Exercise #2
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *
*/

for(var i= 1; i<=5; ++i){
    let resultado =" ";
    for(let j=1; j<=i; ++j){
        resultado +="* ";
    
    }
    console.log(resultado);;
}

//Exercise #3
/*Write while loops to do the following:

– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.
- Print all the odd numbers between 1 - 100.
- Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]
- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190
*/
var xValue = parseInt(prompt("Enter a number"));

while (xValue > 0){
    xValue -= 0.5;
    console.log(xValue);
}

//Print all the odd numbers between 1 - 100.
var oddNumbers = 1;
var residue = 1;

while (residue != 0 && oddNumbers < 100){
    residue = oddNumbers % 2;
    console.log(oddNumbers);
    oddNumbers += 2;
}

//Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]
var bracketsNumber = 1;
var concatNumbers = "";
var nBrackets = parseInt(prompt("Enter n number"));

while (bracketsNumber <= nBrackets){
    concatNumbers += "[" + bracketsNumber + "] ";
    console.log(concatNumbers);
    bracketsNumber++;
}

//Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

var nSum = parseInt(prompt("Enter n number"));
var sum = 1;
var sumResult = 0;

while (sum <= nSum){
    sumResult += sum;
    sum++;
    console.log(sumResult);
}