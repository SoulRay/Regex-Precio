function validarForm(){
    var nombre = document.getElementById("textNombre");
    var precio = document.getElementById("textPrecio");
    var tipoP = document.getElementById("textTipo");
    var codigo = document.getElementById("textCodigo");
    var unidad = document.getElementById("textUnidad");
    var cantidad = document.getElementById("textCantidad");
    var checkP = document.getElementById("checkProducto");

    if (!nombre.value) {
        alert("Debes ingresar un nombre");
        return false;
    }

    if (!precio.value) {
        alert("Debes ingresar un precio");
        return false;
    }

    if (!tipoP.value) {
        alert("Debes ingresar un tipo");
        return false;
    }

    if (!codigo.value) {
        alert("Debes ingresar un codigo");
        return false;
    }

    if (!unidad.value) {
        alert("Debes ingresar un unidad");
        return false;
    }

    if (!cantidad.value) {
        alert("Debes ingresar una cantidad");
        return false;
    }

    if (checkP.checked == false) {
        alert("Debes seleccionar el campo");
        return false;
    }
    
}
