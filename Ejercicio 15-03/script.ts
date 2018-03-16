function popup (mensaje : string){
	window.alert(mensaje);
}
var frase = "Hola, usuario"; 
document.getElementById('b').onclick = function() {popup(frase)};