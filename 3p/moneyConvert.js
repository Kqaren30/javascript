function convert() {
    let e = document.getElementById("euro").value
    let r = e*1.12
    document.getElementById("out").innerHTML = r+ " dolares"
}
function convert2() {
    let d = document.getElementById("dolar").value
    let re = d*.89
    document.getElementById("out2").innerHTML = re+ " euros"
}