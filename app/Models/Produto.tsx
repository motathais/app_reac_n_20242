enum categoria{
    "ração",
    "brinquedos"
}

export default interface Produto{
    id:number,
    nome:string,
    descricao:string,
    preco:number,
    categoria: categoria,
    foto:string, 

}
