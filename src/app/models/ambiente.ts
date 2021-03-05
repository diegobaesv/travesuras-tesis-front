import { Aula } from "./aula";
import { Docente } from "./docente";
import { Nivel } from "./nivel";

export interface Ambiente{
    id_distribucion_ambiente:number;
    docente: Docente; 
    aula: Aula;
    nivel: Nivel;
    anio: number;
    estado: boolean;
}