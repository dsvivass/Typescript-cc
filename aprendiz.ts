export enum NivelEducativo {
    BACHILLERATO = 'bachillerato',
    UNIVERSITARIO = 'universitario',
    POSGRADO = 'posgrado',
}

export class Aprendiz {

    // Constructor
    constructor(public nombres: string, public apellidos: string, public avatar: string, 
        public edad: number, public nivelEducativo: NivelEducativo) {
        // Typescript entiende que debe poner los atributos en la variable del mismo nombre, entonces no es necesario 
        // tener que escribir :
        // this.nombres = nombres;
    }
}