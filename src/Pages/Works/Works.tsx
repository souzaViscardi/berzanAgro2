
import  "./style.css"
import Card from "../../Components/Card/Card"
import {trabalhos, outrosTrabalhos} from "../../data/index"
import {Container,Mosaic,Bloc} from "../../Components/Layout"

import { ScrollRestoration } from "react-router-dom";

export default function Works (){
    return(
        <div id="works" className="full-container">
            <ScrollRestoration />
            <br></br>
            <h1>    
                NOSSO<br/>
                PORTIFÓLIO
            </h1>
            <Mosaic>
                {trabalhos.map((el:any, index:number) => (
                    <Bloc key={index}>
                        <Card name={el.name} key={index} img={el.imgCard} url={"/trabalhos/"+el.path} date={el.date} type={el.type}/>
                    </Bloc>
                ))}
            </Mosaic>
            <Container>
                <h1> OUTROS<br/> TRABALHOS</h1>

            </Container>
            <Mosaic>
                {outrosTrabalhos.map((el:any, index:number) => (
                    <Bloc key={index}>
                        <Card name={el.name} key={index} img={el.imgCard} url={el.path} date={el.date} type={el.type}/>
                    </Bloc>
                ))}

            </Mosaic>
        </div>
    )
}

