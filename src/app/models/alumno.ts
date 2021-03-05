import { Apoderado } from "./apoderado";

export interface Alumno{
    id_alumno:number;
    nombres: string;
    apellido_paterno: string;
    apellido_materno: string;
    documento_identidad: string;
    nombre_completo: string;
    apoderado: Apoderado;
}