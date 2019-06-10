class Circle {
    constructor(p1, r){
        if (p1 instanceof Point){
            this._p1 = p1;
            this._r = r;
        } else {
            var Error = 'Error: un punto no es una instancia de Point';
            alert (Error);
        }
    };
    toString(){return ("Punto:("+this._p1.x+","+this._p1.y+")"+", Radio:"+this._r);};
    clone(){return new Circle(this._p1, this._r); };
    get p1(){return this._p1;}
    set p1(x){this._p1 = x;}
    get r(){return this._r;}
    set r(x){this._r = x;}
}