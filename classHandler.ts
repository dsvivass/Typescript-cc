import { Aprendiz, NivelEducativo } from "./aprendiz.js"; // We say that it'll be imported from the file aprendiz.js

export const ap = new Aprendiz("Juan", "Perez", "avatar.png", 20, NivelEducativo.BACHILLERATO);

let aprendizTable: HTMLElement = document.getElementById("aprendizTable")!; // ! means that the variable is not null

mostrarDatosAprendiz(ap);

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
    let tBodyAprendiz: HTMLElement = document.createElement("tbody");
    tBodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"/></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>
    `
    aprendizTable.appendChild(tBodyAprendiz);
}