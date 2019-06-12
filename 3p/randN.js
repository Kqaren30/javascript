function Aleatorio(){
    var avg=0;
    var result="";
    var N=parseInt(document.getElementById("num").value);
    var num=0;
    for(var i=0;i<N;i++){
        var aleatorio=Math.round(Math.random() * 11);
        result=result+aleatorio+"\n";
        document.getElementById("numbers").innerHTML = result;
        if(aleatorio>num){
        var max= aleatorio;
        num= aleatorio;
        } 
        if (aleatorio<num){
        var min=aleatorio;
        num=aleatorio;
        }
        avg=avg+aleatorio;
        document.getElementById("out").innerHTML = "Numero maximo: "+max;
        document.getElementById("out2").innerHTML = "Numero menor: "+min;
    }
    avg=avg/N;
    document.getElementById("out3").innerHTML = "Promedio: "+ avg;
}