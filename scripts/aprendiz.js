export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "universitario";
    NivelEducativo["POSGRADO"] = "posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    // Constructor
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        // Typescript entiende que debe poner los atributos en la variable del mismo nombre, entonces no es necesario 
        // tener que escribir :
        // this.nombres = nombres;
    }
    return Aprendiz;
}());
export { Aprendiz };
