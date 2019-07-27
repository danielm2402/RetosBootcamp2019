function setResultado(value) {
    document.getElementById('output').value = value;
}
function obtenerResultado() {
    return(document.getElementById('output').value);
}
function agregar(entrada, event) { 
    var result = obtenerResultado();
    if (result!='0' || isNaN(entrada)) setResultado(result + entrada);
    else setResultado(entrada);
}
function calcular() {
    var result = eval(obtenerResultado()); 
    setResultado(result);
}
function limpiar() { 
    setResultado(0);
}