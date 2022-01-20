//EJERCICIO 1
function js_style(){
    document.getElementById("text").style.color = "red";
    document.getElementById("text").style.fontFamily = "Arial";
    document.getElementById("text").style.fontSize = "50px";
}

//EJERCICIO2
function getFormvalue(){
    let names = document.forms["form1"]["fname"].value;
    let lnames = document.forms["form1"]["lname"].value;
    console.log(names + " " + lnames);
}

//EJERCICIO3
function getNumberLinks(){
    let longitud = document.links.length;
    let primero = document.links[0].href;
    let ultimo = document.links[longitud-1].href;

    alert("Hay " + longitud + " links" + "\n \n" +
    "El primer enlace --> " + primero + "\n \n" +
    "El ultimo enlace --> " + ultimo);
}
//EJERCICIO4
function selectContainer(){

    // 1
    document.getElementById("container").style.background = "red";
    
    // 2
    document.querySelector("#container").style.background = "blue";

    // 3
    let x = document.getElementsByClassName("second");
    console.log(x);

    // 4
    let a = document.querySelector("ol .third");
    console.log(a);
    
    // 5
    //document.querySelector("#container").innerHTML = "Hello Mau, no te escuchamos";

    // 6
    document.querySelector(".footer").classList.add("main");
    
    // 7
    document.querySelector(".footer").classList.remove("main");

    // 8,9 y 10
    let li = document.createElement("li");
    li.innerText = "four";
    document.querySelector("ul").appendChild(li);

    //Challengue
    document.querySelector(".footer").remove();
}

selectContainer();

// ! Challengue
$(document).ready(
    function(){
        $("ol li").each(
            function(){
                console.log($(this).text());
            }
        );
    }
);