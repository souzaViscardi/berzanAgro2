export interface Page{
    id:string
    cliente: string
    ano:string
    categoria:string
    nome: string
    description: string
    finalProduct?:string
    design?: string
    cores?:string
    conceptImg?: string
    idealizacao?: string
    bottomImgs:string[]
    elementoIcones?:string
    coberturaIlustracao?:string
    ritmoCores?:string
    videos:string[]
    bottomvideos:string[]
    imgs:string[]

}
export interface Portfolio{
    id:string
    titulo: string
    subtitulo:string
    imgs:string[]

}
export interface trabalhosInterface {
    name: string;
    type?: string;
    imgCard?: string;
    url?: string;
    description?: string;
    id?: number;
    path?: string;
}

