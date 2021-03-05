export interface Apoderado{
    id_apoderado: number;
    documento_identidad: string;
    apellido_paterno: string;
    apellido_materno: string;
    nombres: string;
    fecha_nacimiento: Date;
    fecha_inscripcion: Date;
    fecha_baja: Date;
    sexo: string;
    telefono: string;
    direccion_casa: string;
    estado: boolean;
}