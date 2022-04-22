import { Aprendiz, NivelEducativo } from "./aprendiz.js"; // We say that it'll be imported from the file aprendiz.js
import { Curso } from "./curso.js";
var cursos = [
    new Curso('Practicas de ingenieria de software', 20, 90, true, 2019),
    new Curso('Ingenieria de software para la web', 15, 99, true, 2018),
    new Curso('Pruebas automatizadas', 25, 50, false, 2020),
    new Curso('Principios de diseño y arquitectura', 30, 75, true, 2020),
];
export var ap = new Aprendiz("Juan", "Perez", "avatar.png", 20, NivelEducativo.BACHILLERATO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz"); // ! means that the variable is not null
var estadisticasTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tBodyAprendiz = document.createElement("tbody");
    tBodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"/></td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>\n    ");
    aprendizTable.appendChild(tBodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados:</b></td><td>".concat(numeroCertificados, "</td>");
    estadisticasTable.appendChild(trElement);
}
