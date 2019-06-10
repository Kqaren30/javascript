function convert() {
    let k = document.getElementById("temp").value
    let r = k- 273.15
    document.getElementById("out").innerHTML = r.toFixed(2) + " degrees C"
}
function convert2() {
    let c = parseInt(document.getElementById("temp2").value)
    let re = c+ 273.15
    document.getElementById("out2").innerHTML = re + " degrees K"
}