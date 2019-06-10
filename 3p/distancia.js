function convert() {
    let km = parseInt(document.getElementById("dist").value)
    let m = km* 0.62137
    document.getElementById("out").innerHTML = m.toFixed(2) + " millas"
}
function convert2() {
    let mi = parseInt(document.getElementById("dist2").value)
    let k = mi/0.62137
    document.getElementById("out2").innerHTML = k.toFixed(2) + " kilometros"
}