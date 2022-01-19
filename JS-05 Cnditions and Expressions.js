//Exercise #1
//You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]

/*Part 1
Write a function to insert a name to the end of the list. Add your own name to the end of the list.*/
function list(){
    let names =["Maria","Antony","Joy","Juan"];
    let nuevo = prompt("Add a new name");
    names.push(nuevo);
    console.log(names);
}
//list();

/*Part 2
Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.*/
function list2(){
let  names =["Maria","Antony","Joy","Juan"];
let x = prompt("Add a name");
console.log(names.includes(x));

}
//list2();

/*Part 3
Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists.*/
function list3(){
let names1 =["Jose","Maria","Ricardo","Carlos"];
let names2 =["Mario","Cris"];
let names3 = names2.concat(names1);
console.log(names3)
}
//list3();

/*Part 4
Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function.*/
function list4(){
    let arreglo =[];
    let name = prompt("Add a name: ");
    arreglo.push(name);
    let name2=prompt("Add a name:")
    arreglo.push(name2);
    let name3=prompt("Add a name:")
    arreglo.push(name3);
    console.log(arreglo);
    
for(i=0;i<arreglo.length;i++){
    console.log(arreglo[i].length);
}



}
//list4();

//Exercise #2
//What do the following expressions evaluate to?
console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);

//Exercise #3
//Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), greater than 100, or less than 0.

function compareNumber(x){


if(x>=0&&x<=25){
    alert(x+" is a number between 0 and 25");
} else if(x>=26&&x<=100){
    alert(x+" is a numebr between 26 and 100")
} else if(x>100){
    alert(x+" iS a number greather than 100")
} else if(x<0){
    alert(x+" is a number less than 0")
} else{
    alert("ERROR ")
}
}
compareNumber(parseInt(prompt("Write a Number")));