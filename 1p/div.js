function division(a,b){
    if (b===0){
	return('zero div');}//detener el programa exceptions.js
    else  { if (typeof a === 'number' && typeof b === 'number'){
        d=a/b;
	print(d);
	return true; }
	    else{
		return false;}}
}
print (division(3,2));


