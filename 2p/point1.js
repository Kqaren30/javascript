
class Point{
	constructor(x,y){
		if ((typeof x == 'undefined') && (typeof y == 'undefined')){
			this.x = 0;
			this.y = 0;
		} else {
			this.x = x;
			this.y = y;
		}
    };
    toString() {return "("+this.x+","+this.y+")";};
    distancia(p1,p2) {
      var d1 = p2.x - p1.x;
      var d2 = p2.y - p1.y;
      d1 = d1 ** 2;
      d2 = d2 ** 2;
      return Math.sqrt(d1+d2);
    };
    clone() {return new Point (this.x, this.y);};
};
