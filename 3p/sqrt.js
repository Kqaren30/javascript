let sqrt = a => {
    var i=0;
    var x;
    var y;
    while( (i*i) <= a )
            i+=0.1;
    x1=i;
    for(let j=0;j<10;j++)
    {
        y = a;
        y /= x;
        y += x;
        y /= 2;
        x = y;
    }
    return y;
}