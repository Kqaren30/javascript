var a=5;
var b=8;
var c=12;
var op1=(a*b)*c;
var s=(a+b+c)/2;
var op2= s*((s-a)*(s-b)*(s-c));
var op3= Math.sqrt(op2);
var final= op1/(op3*4);
print('El radio del circulo circunscrito es: ' + final);