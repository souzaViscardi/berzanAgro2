import {portfolio} from "../../../data/index"
import {Container,Bloc, Mosaic} from "../../../Components/Layout"
import { ScrollRestoration } from "react-router-dom";
import { Portfolio } from "../../../data/Interfaces";
import "./style.css"
export function Videos(){
    const id = "videos"
    const page = portfolio.find((el:Portfolio) => el.id==id) || portfolio[0]
    let divisor = 3
    let arrImgs = [...page.imgs]
    let index = 0
    let imgs = []
    arrImgs.forEach(() => {
        let group = arrImgs.splice(index, divisor)
        console.log(arrImgs.length) 
        divisor == 3 ? divisor = 2 : divisor = 3
        imgs.push(group)
        index=divisor-1
    })
    if(arrImgs.length>0)
        imgs.push(arrImgs)
    console.log(imgs)
    return(
        <div className="full-container" id="VideosPortfolio">
            <ScrollRestoration />
            <Container classe="container">
                <Bloc>
                    <h1>{page.titulo}</h1>
                    <span>{page.subtitulo}</span>
                </Bloc>
            </Container>
            <Mosaic>
            {
                page.imgs.map((el, index) => (
                <Bloc key={index} className="videoContainer">
                    <iframe
                            src={`https://www.youtube.com/embed/${el}`}
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                            />                
                </Bloc>
                ))
            }
            </Mosaic>

        </div>)
}