class Vector{
    constructor(a){
	if (Array.isArray(a)){
	    this._a = a;
	} else {
        var Error='no es vector';
        alert (Error);
	}
    };
    min(){
	    let t = this._a[0];
	    for (let x of this._a){
	    if (t>x)
		t = x;
	}
	return t;
    };
    max(){
        let t = this._a[0];
	    for (let x of this._a){
	    if (t<x)
		t = x;
	}
	    return t;
    };
    sum(){
        let s = 0;
        for (let x of this._a){
	    s = s + x;
        }
        return s;
    };
    avg(){
        let s = 0;
        let r = 0;
        for (let x of this._a){
	    s = (s + x);
        }
        r = s/this._a.length;
        return r;
    };
    initialize(v1,v2){
        for(let i = 0; i < v2; i++){
            this._a[i] = v1;
        }
        return this._a;
    };
    vectorize(v1,v2,v3){
        for (let i = v1; i < v2; i++){
                v = v2 / v3;
        }
    };
    getData(){
        return  {this._a,this.v};
    };
}
