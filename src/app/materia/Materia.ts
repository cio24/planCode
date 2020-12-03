export class Materia {
    
    public nombre: string;
    public id: string;
    public tipo:string;

    public cursadaAprobada: boolean;
    public finalAprobado: boolean;
    public promocionada: boolean;
    public condicional: boolean;
    public showAscorrelative: boolean;
    public showAsRequirement: boolean;

    public notaCursada: number;
    public notaFinal: number;

    public equivalencias!: Set<string>;
    public requisitosDirectosCursada: Set<Materia>;
    public requisitosFinal: Set<Materia>;
    public todasLasMaterias: Materia[];

    constructor(materiaJson: any, todasLasMaterias: Materia[]){
        this.nombre = materiaJson.nombre;
        this.id = materiaJson.id;
        this.tipo = materiaJson.tipo;

        this.cursadaAprobada = (materiaJson.cursadaAprobada == "true");
        this.finalAprobado = (materiaJson.finalAprobado == "true");
        this.promocionada = (materiaJson.promocionada == "true");
        this.condicional = (materiaJson.condicional == "true");
        this.showAscorrelative = false;
        this.showAsRequirement = false;

        //el + delante del string lo transforma al tipo number
        this.notaCursada = +materiaJson.notaCursada;
        this.notaFinal = +materiaJson.notaFinal;

        this.requisitosDirectosCursada = new Set<Materia>();
        materiaJson.requisitosCursada.array.forEach((id: string) => {
            let indice: number = +id;
             //las materias se enumeran del 1 en adelante, pero el arreglo empieza en 0, por eso se lo pasa restando 1
            this.requisitosDirectosCursada.add(todasLasMaterias[indice -1])

        });

        this.requisitosFinal = new Set<Materia>();
        materiaJson.requisitosFinal.array.forEach((id: string) => {
            let indice: number = +id;
             //las materias se enumeran del 1 en adelante, pero el arreglo empieza en 0, por eso se lo pasa restando 1
            this.requisitosFinal.add(todasLasMaterias[indice -1])

        });

        this.todasLasMaterias = todasLasMaterias;
    }

    public getNota(): number {
        if(this.finalAprobado)
            return this.notaFinal;
        return this.notaCursada;
    } 

    public getRequisitosCursada(): Set<Materia> {
        let requisitos = new Set<Materia>();
        let requisitosIndirectos : Set<Materia>;
        for (let requisitoDirecto of this.requisitosDirectosCursada) {
            requisitos.add(requisitoDirecto);
            requisitosIndirectos = requisitoDirecto.requisitosDirectosCursada;
            for (let requisitoIndirecto of requisitosIndirectos)
                requisitos.add(requisitoIndirecto);
        }
        return requisitos;
    }

    public showRequisitosCursada(): void {
        let requisitos = this.getRequisitosCursada();
        for (let r of requisitos)
            r.showAsRequirement = true;
    }

    public hideRequisitosCursada(): void {
        let requisitos: Set<Materia> = this.getRequisitosCursada()
        for (let r of requisitos)
            r.showAsRequirement = false;
    }

    public getMateriasCorrelativas(): Set<Materia> {
        let materiasCorrelativas = new Set<Materia>();
        for(let materia of this.todasLasMaterias)
            if(materia.isRequisitoCursada(this) || materia.isRequisitoFinal(this))
                materiasCorrelativas.add(materia);
        return materiasCorrelativas;
    }

    public isRequisitoCursada(materia: Materia): boolean {
        return this.getRequisitosCursada().has(materia);
    }

    public isRequisitoFinal(materia: Materia): boolean {
        return this.requisitosFinal.has(materia);
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