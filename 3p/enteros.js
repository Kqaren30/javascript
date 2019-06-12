function entero(){
    var result="";
    for(var i=0;i<10;i++){
        var aleatorio=Math.floor(Math.random() * 11); 
        result=aleatorio+"\n"+result;
        document.getElementById("numbers").innerHTML = result;
    }
}