import { Aprendiz, NivelEducativo } from "./aprendiz.js"; // We say that it'll be imported from the file aprendiz.js
export var ap = new Aprendiz("Juan", "Perez", "avatar.png", 20, NivelEducativo.BACHILLERATO);
var aprendizTable = document.getElementById("aprendizTable"); // ! means that the variable is not null
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tBodyAprendiz = document.createElement("tbody");
    tBodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"/></td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>\n    ");
    aprendizTable.appendChild(tBodyAprendiz);
}
