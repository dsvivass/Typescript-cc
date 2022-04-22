export class Curso {
    
    constructor(public nombre: string, public horas: number, public calificacion: number, public certificado: boolean, public anio: number){
        // Typescript entiende que debe poner los atributos en la variable del mismo nombre, entonces no es necesario 
        // tener que escribir :
        // this.nombre = nombre;
    }
}