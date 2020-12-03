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
    public todasLasMaterias!: Set<Materia>;

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

    public showMateriasRequisitos(): void {
        let requisitos = new Set<Materia>();
        let requisitosIndirectos : Set<Materia>;
        for (let requisitoDirecto of this.requisitosDirectos) {
            requisitos.add(requisitoDirecto);
            requisitosIndirectos = requisitoDirecto.requisitosDirectos;
            for (let requisitoIndirecto of requisitosIndirectos)
                requisitos.add(requisitoIndirecto);
        }
        for (let r of requisitos) {
            r.showAsRequirement = true;
        }
    }

    public getMateriasRequisito(): Set<Materia> {
        let requisitos = new Set<Materia>();
        let requisitosIndirectos : Set<Materia>;
        for (let requisitoDirecto of this.requisitosDirectos) {
            requisitos.add(requisitoDirecto);
            requisitosIndirectos = requisitoDirecto.requisitosDirectos;
            for (let requisitoIndirecto of requisitosIndirectos)
                requisitos.add(requisitoIndirecto);
        }
        return requisitos;
    }

    public hideMateriasRequisitos(): void {
        let requisitos: Set<Materia> = this.getMateriasRequisito()
        for (let r of requisitos)
            r.showAsRequirement = false;
    }

    public getMateriasCorrelativas(): Set<Materia> {
        let materiasCorrelativas = new Set<Materia>();
        for(let materia of this.todasLasMaterias)
            if(materia.isRequisito(this))
                materiasCorrelativas.add(materia);
        return materiasCorrelativas;
    }

    public isRequisito(materia: Materia): boolean {
        let materiasRequisitos: Set<Materia> = this.getMateriasRequisito();
        return materiasRequisitos.has(materia);
    }

    public showMateriasCorrelativas(): void {
        let materiasCorrelativas: Set<Materia> = this.getMateriasCorrelativas();
        for(let materia of materiasCorrelativas)
            materia.showAscorrelative = true;
    }

    public hideMateriasCorrelativas(): void {
        let requisitos: Set<Materia> = this.getMateriasCorrelativas();
        for (let r of requisitos)
            r.showAscorrelative = false;
    }

}