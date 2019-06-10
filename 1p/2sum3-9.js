var isNumber = function (x){
if (typeof x === 'number')
return true;
else
return false;
}
var s=0;
for ( var i=3; i<=9;i++){
if (i%2==0){
 s=s+i;}
}

print('4+6+8='+s);
print (isNumber(s));