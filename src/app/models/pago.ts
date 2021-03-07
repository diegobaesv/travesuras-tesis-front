import { Usuario } from "./usuario"

export interface Pago{
    id_pago:number;
    usuario: Usuario,
    monto: number,
    metodo :string,
    concepto: string,
    fecha_pago: Date
}