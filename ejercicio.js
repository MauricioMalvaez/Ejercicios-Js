//funcion triangulo
function triangulo(){
    var base = 2;
    var altura = 5;
    var res = (base*altura)/2;
    alert("El area del triangulo es: "+ res);
}
triangulo();

//funcion circulo
function circulo(radio){
    var radio=20;
    var resCirculo= Math.PI*(radio**2);
    console.log("El resultado es: "+resCirculo)
}

circulo();

//funcion rectangulo
function areaRectangulo(b=10,a=4){
    alert("El Área del rectángulo es: "+(b*a));
}

areaRectangulo();
