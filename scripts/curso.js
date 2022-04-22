var Curso = /** @class */ (function () {
    function Curso(nombre, horas, calificacion, certificado, anio) {
        this.nombre = nombre;
        this.horas = horas;
        this.calificacion = calificacion;
        this.certificado = certificado;
        this.anio = anio;
        // Typescript entiende que debe poner los atributos en la variable del mismo nombre, entonces no es necesario 
        // tener que escribir :
        // this.nombre = nombre;
    }
    return Curso;
}());
export { Curso };
