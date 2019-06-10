var isNumber = function (x){
if (typeof x === 'number')
return true;
else
return false;
}
var m=1;
for ( var i=3; i<=9;i++){
if (i%2==0){
m=m*i;}
}

print('4*6*8='+m);
print (isNumber(m));