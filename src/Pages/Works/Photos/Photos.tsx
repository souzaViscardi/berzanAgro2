import {pages} from "../../../data/index"
import {Container,Bloc, Mosaic} from "../../../Components/Layout"
import { ScrollRestoration,useParams } from "react-router-dom";
import { Page } from "../../../data/Interfaces";
import "./style.css"
export function Photos(){
    const {id} = useParams()
    const page = pages.find((el:Page) => el.id==id) || pages[0]
    console.log(page)


    return(
        <div className="full-container" id="Photos">
            <ScrollRestoration />
            <Container classe="container margin-top">
                <Bloc>
                    <h2>{page.nome}</h2>
                    <span>{page.description}</span>
                </Bloc>
                <Bloc className="full">
                    <div className="border-bottom ajuste">
                        <h3><b>CLIENTE</b></h3>
                        <span>{page.cliente}</span>
                    </div>
                    <div className="border-bottom ajuste">
                        <h3><b>ANO</b></h3>
                        <span>{page.ano}</span>
                    </div>
                    <div className="ajuste">
                        <h3><b>CATEGORIA</b></h3>
                        <span>{page.categoria}</span>
                    </div>
                </Bloc>  
            </Container>
            <Container classe="imgContainer">
                <img className="aboutImg" src={page.finalProduct} alt="about"/>
            </Container>
            <Container>
                <Bloc >
                    <span className="start">{page.conceito}</span>
                </Bloc>  
                <Bloc/>
            </Container>
            <Mosaic>
                {page.imgs.map((el:any, index:number) => (
                    <Bloc key={index}>
                        <img src={el}/>
                    </Bloc>
                ))}
            </Mosaic>
            <Container>
                <Bloc >
                    <span className="start">{page.conceito}</span>
                </Bloc>  
                <Bloc/>
            </Container>
            <Mosaic>
                {page.bottomImgs.map((el:any, index:number) => (
                    <Bloc key={index}>
                        <img src={el}/>
                    </Bloc>
                ))}
            </Mosaic>
            </div>)
}