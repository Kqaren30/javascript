function convert(){
    var cadena=document.getElementById("text").value
    var dividido=cadena.split(" ");
    var palabra=dividido.length;
    var caracter=cadena.length;
    document.getElementById("caracteres").innerHTML=caracter
    document.getElementById("palabras").innerHTML=palabra
    
}