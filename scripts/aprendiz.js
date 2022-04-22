export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "universitario";
    NivelEducativo["POSGRADO"] = "posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    // Constructor
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo, cursos) {
        // Typescript entiende que debe poner los atributos en la variable del mismo nombre, entonces no es necesario 
        // tener que escribir :
        // this.nombres = nombres;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
        // Curso[] means that it'll be an array of Curso objects
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var totalCursosC = 0;
        for (var i = 0; i < this.cursos.length; i++) {
            var curso = this.cursos[i];
            if (curso.certificado) {
                totalCursosC++;
            }
        }
        return totalCursosC;
    };
    return Aprendiz;
}());
export { Aprendiz };
