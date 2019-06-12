function decimal(){
    var result="";
    for(var i=0;i<10;i++){
        var aleatorio = Math.random().toFixed(2);
        var result=aleatorio+"\n"+result;
        document.getElementById("numbers").innerHTML = result;
    }
}