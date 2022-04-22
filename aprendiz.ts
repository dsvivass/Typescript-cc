import { Curso } from "./curso";

export enum NivelEducativo {
    BACHILLERATO = 'bachillerato',
    UNIVERSITARIO = 'universitario',
    POSGRADO = 'posgrado',
}

export class Aprendiz {

    // Constructor
    constructor(public nombres: string, public apellidos: string, public avatar: string, 
        public edad: number, public nivelEducativo: NivelEducativo, public cursos: Curso[]) {
        // Typescript entiende que debe poner los atributos en la variable del mismo nombre, entonces no es necesario 
        // tener que escribir :
        // this.nombres = nombres;

        // Curso[] means that it'll be an array of Curso objects
    }

    public darCursosCertificados(): number {
        let totalCursosC: number = 0;

        for (let i = 0; i < this.cursos.length; i++) {
            let curso: Curso = this.cursos[i];

            if (curso.certificado) {
                totalCursosC++;
            }
        }

        return totalCursosC;
    }
}