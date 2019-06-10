function Contador(){
    var cadena=document.getElementById("text").value
    var dividido=cadena.split(" ");
    var palabra=dividido.length;
    var caracter=cadena.length;
    var sentencia1=cadena.split(".");
    var sentencia=sentencia1.length;
    var parrafo1=cadena.split("<br>" + "<br>");
    var parrafo=parrafo1.length;
    document.getElementById("caracteres").innerHTML="Numero de caracteres:"+caracter
    document.getElementById("palabras").innerHTML="Numero de palabras:"+palabra
    document.getElementById("sentencias").innerHTML="Numero de sentencias:"+sentencia
    document.getElementById("parrafos").innerHTML="Numero de parrafos:"+parrafo
}

