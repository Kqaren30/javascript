class Square{
    constructor(p1, m){
        if(p1 instanceof Point){
            this._p1 = p1;
            this._m = m;
        } else {
            var Error = 'Error: un punto no es una instancia de Point';
            alert (Error);
        }
    };
    toString(){return ("Punto:("+this._p1.x+","+this._p1.y+") Medida de los lados: " + m);};
    clone(){return new Square(this._p1, this._m);};

    get p1(){return this._p1;}
    set p1(x){this._p1 = x;}
    get l(){return this._m;}
    set l(x){this._m = x;}
}