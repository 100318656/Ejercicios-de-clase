function popup(mensaje) {
    window.alert(mensaje);
}
var frase = "Hola, usuario";
document.getElementById('b').onclick = function () { popup(frase); };
