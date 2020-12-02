export class Materia {
    public nombre: string;
    public shortName: string;
    public finalAprobado: boolean;
    public cursadaAprobada: boolean;
    public promocionada: boolean;
    public condicional: boolean;
    public notaCursada: number;
    public notaFinal: number;
    public requisitosDirectos: Set<Materia>;
    public showAscorrelative: boolean;
    public showAsRequirement: boolean;

    constructor(nombre: string, shortName: string){
        this.nombre = nombre;
        this.shortName = shortName;
        this.cursadaAprobada = false;
        this.finalAprobado = false;
        this.promocionada = false;
        this.condicional = false;
        this.notaFinal = 0;
        this.notaCursada = 0;
        this.showAscorrelative = false;
        this.showAsRequirement = false;
        this.requisitosDirectos = new Set<Materia>();
    }

    public getNota(): number {
        if(this.finalAprobado)
            return this.notaFinal;
        return this.notaCursada;
    } 

    public getId(): string {
        console.log("el id es: " + this.nombre.substring(0,this.nombre.indexOf(" ")));
        return this.nombre.substring(0,this.nombre.indexOf(" "));
    }
}