function payment(transactions, total) {
var transactions =parseInt(prompt("Number of transactions: "));
var total = parseInt(prompt("total cost of payment"));
alert("Final cost:" + (transactions*3)*1.01);
}
//payment();

function names(a,b,c){
    var a = prompt("Ingresa primer nombre: ");
    var b = prompt("Ingresa primer nombre: ");
    var c = prompt("Ingresa primer nombre: ");
    console.log("Welcom! " + a + ", " +b + "," + c + ".");
}
//names();



function age(a) {
var a = prompt("tell me your birthday year: ");
alert(2022-year);
}
//age();

function nameAge(n1,n2,n3,A1,A2,A3){
    var n1 = prompt("Ingresa primer nombre: ");
    var A1 = prompt("Ingresa edad: ");
    var n2 = prompt("Ingresa segundo nombre: ");
    var A2 = prompt("Ingresa edad: ");
    var n3 = prompt("Ingresa tercer nombre: ");
    var A3 = prompt("Ingresa primer nombre: ");
    alert("Welcome "+n1 + ", "+ "you are:"+A1);
    alert("Welcome "+n2 + ", "+ "you are:"+A2);
    alert("Welcome "+n3 + ", "+ "you are:"+A3);

}

//nameAge();

function grade (){
    var grade = parseInt(prompt ("Tell me the grade"));
    if(grade >= 5 && grade <= 8 ){
        alert(true);
    }
    else if(grade > 8 && grade < 11) {
        alert ("Excellent")
    } 
    else if (grade == 11){
        alert ("Perfect")
    }
    else if(grade >= 0 && grade < 5){
        alert(false);
    }
    else{
        alert("Out of range")
    }
}
grade();


