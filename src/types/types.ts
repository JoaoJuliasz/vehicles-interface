export type Vehicle = {
    veiculo: string
    marca: string
    ano: number | string
    descricao: string
    vendido: boolean,
    _id?: string,
}

export const emptyVehicle = {
    veiculo: '',
    marca: '',
    ano: '',
    descricao: '',
    vendido: false,
}