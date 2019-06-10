print ('Ingresa el primer numero');
var a=Number(readline());
print('Ingresa el segundo numero');
var b=Number(readline());
print ('Ingresa el tercer numero');
var c=Number(readline());
var cuadrado=1;
if (a===0){
    print(a+' es el elemento neutro aditivo=0');}

if (b===0){
    print(b+' es el elemento neutro aditivo=0');}

if (c===0){
    print(c+' es el elemento neutro aditivo=0');}

if (a<0){ cuadrado=a*a;
	  print ('El cuadrado de '+a+' = '+cuadrado);}
if (b<0){ cuadrado=b*b;
	  print ('El cuadrado de '+b+' = '+cuadrado);}
if (c<0){ cuadrado=c*c;
	  print ('El cuadrado de '+c+' = '+cuadrado);}
var triangulo=a+b+c;
print('El perimetro del triangulo es:'+triangulo);
var z=(b*b)-(4*a*c);
z= Math.sqrt(z);
var cuadratica1= -(b)+z;
cuadratica1= cuadratica1/(2*a);
print ('1ª raiz='+ cuadratica1);
var cuadratica2= -(b)-z;
cuadratica2= cuadratica2/(2*a);
print ('2ª raiz='+ cuadratica2);


