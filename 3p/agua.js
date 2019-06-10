function convert() {
    let g = parseInt(document.getElementById("Galon").value)
    let l = g/0.26417
    document.getElementById("out").innerHTML = l.toFixed(2) + " millas"
}
function convert2() {
    let lt = parseInt(document.getElementById("litro").value)
    let ga = lt* 0.26417
    document.getElementById("out2").innerHTML = ga.toFixed(2) + " kilometros"
}