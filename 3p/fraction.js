import {Fraction} from "./Fraction2.js";

function convert() {
let f1 = new Fraction(parseInt(document.getElementById("num1").value), parseInt(document.getElementById("den1").value));
let f2 = new Fraction(parseInt(document.getElementById("num2").value), parseInt(document.getElementById("den2").value));
let result;
    switch (document.getElementById("operador").value) {
        case "Suma":
            result = f1.sum(f2);
            break;
        case "Resta":
            result = f1.subt(f2);
            break;
        case "Multiplicacion":
            result = f1.mul(f2);
            break;
        case "Division":
            result = f1.div(f2);
            break;

    }
    document.getElementById("out").value = result.num;
    document.getElementById("out1").value = result.den;
}
document.getElementById("Resultado").onclick = convert;