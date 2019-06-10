class Fraction {
    constructor (num,den){ 
		
		if ((typeof num != 'number')||(typeof den != 'number')){
			var Error='Error: Lo ingresado no es un número';
			alert (Error);
			
		}
    	else if (num % 1 != 0 || den % 1 != 0) {
			var Error='Error: Lo ingresado no es entero';
			alert (Error);
    	} else {
    		this.num = num;
    		this.den = den;
    	}
    };
	euclides(num, den) {
		var op;
		var max = Math.max(num, den);
		var min = Math.min(num, den);
		do {
			op = min;
			min = max % min;
			max = op;
		} while (min !== 0);
		den = max;
		return den;
	};

    sum(f){
	if (f instanceof Fraction){
		if (this.den === f.den){
	    var num = this.num + f.num;
		var den = this.den;
		var r = this.euclides(num,den);
			den = den/r;
			num = num/r;
		return new Fraction(num,den);
		} else {
		var num = (this.num * f.den) + (this.den * f.num);
		var den = (this.den * f.den);
		var r = this.euclides(num,den);
			den = den/r;
			num = num/r;
		return new Fraction(num,den);
		}
	}
	};

    subt(f){
		if (f instanceof Fraction){
    	if (this.den === f.den) {
    		var num = this.num - f.num;
			var den = this.den;
			var r = this.euclides(num,den);
			den = den/r;
			num = num/r;
			return new Fraction(num, den);
    	} else {
			var num = (this.num * f.den) - (this.den * f.num);
			var den = (this.den * f.den);
			var r = this.euclides(num,den);
			den = den/r;
			num = num/r;
			return new Fraction(num,den);
    	}
	}
	};
	
    div(f){
		if (f instanceof Fraction){
		if (this.den == 0 || f.den == 0){
			var Error='Error: No es posible dividir sobre 0';
			alert(Error);
		} else {
			var num = this.num * f.den;
			var den = this.den * f.num;
			var r = this.euclides(num,den);
			den = den/r;
			num = num/r;
			return new Fraction (num,den);
		}
	}
	};
    mul(f){
	if (f instanceof Fraction){
	var num = this.num * f.num;
	var den = this.den * f.den;
	var r = this.euclides(num,den);
	den = den/r;
	num = num/r;
	return new Fraction(num,den);
	}
   };
};
