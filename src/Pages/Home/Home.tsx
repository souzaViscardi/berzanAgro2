
import  "./style.css"
import Card from "../../Components/Card/Card"
import {Container,Bloc} from "../../Components/Layout"
import { ScrollRestoration } from "react-router-dom";
import Mapa from "../../Components/Mapa/Mapa";
import Contact from "../Contact/Contact";
import NavBar from "../../Components/NavBar/NavBar";
import { useRef } from "react";
export default function Home(){
    const contactRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    
    return(
        <>
        <NavBar contactRef={contactRef} aboutRef={aboutRef}></NavBar>
        <div id="home" className="full-container">
            <ScrollRestoration />
            <Container classe="imgContainer">
                <div className="videoContainer">
                <div className="titleOverflow">
                    <h1>Soluções de</h1>
                    <h1>Alta Performance</h1>
                    <span>Potencialize sua Produção com Produtos de Qualidade</span>
                </div>
                 <video autoPlay className="aboutImg" src={"Home/video_home.mp4"}  loop={true} muted={true}></video>            
                </div>
            </Container>
            <Container>
                    <h1 className="left margin"> Nossas Linhas de Produtos</h1>
            </Container>
            <Container classe="marginRigth marginLeft">    
                <div id="linhaProdutos">
                    <Card name="Pecuária" url="/produtos?idProduct=pecuaria" icon="/Home/iconPecuaria.png">
                        <img className="aboutImg img-card" src="/Home/pecuaria.jpg" alt="about"/>
                    </Card>
                    <Card center={true} classe="centerImg" name="Fertilizantes" url="/produtos?idProduct=fertilizantes" icon="/Home/iconFertilizantes.png">
                        <img className="aboutImg img-card centerImg" src="/Home/fertilizantes.jpg" alt="about"/>
                    </Card>
                    <Card name="Industria" url="/produtos?idProduct=industrial" icon="/Home/iconIndustria.png">
                    <img className="aboutImg img-card" src="/Home/industria.jpg" alt="about"/>
                    </Card>
                </div>
            </Container>
            <Container classe="orange">
                <br/>
                <h1 className="title margin">    
                    Sobre a Nossa Empresa
                </h1>
                <br/>
            </Container>
            <Container scrollref={aboutRef}>
                <Bloc>
                    <img src="/Home/Foto_Sobre_1.jpg" alt="about"/>
                </Bloc>
                <Bloc className="marginRigth">  
                    <div className="text">
                        <h2>Berzan Agro</h2>

                        <p>	Nossa missão é fornecer soluções inovadoras e de alta qualidade para o setor agro, 
                            com foco em eficiência, rapidez e sustentabilidade. Atuamos com o compromisso de apoiar 
                            nossos clientes em todas as etapas da produção, oferecendo produtos de ponta que otimizam os 
                            resultados no campo.
                        </p>
                        <p>
                            Nosso diferencial está na agilidade e precisão de nossas entregas. 
                            Sabemos que o tempo é um fator crítico para o sucesso no agronegócio, 
                            e por isso, nos dedicamos a garantir que nossos produtos cheguem rapidamente, 
                            sempre no prazo e com total segurança.
                        </p>
                    </div>
          
                </Bloc>
            </Container>
            <Container>
                <Bloc className="marginLeft">  
                    <div className="text">
                        <p>
                            Além disso, valorizamos práticas sustentáveis, que respeitam o meio ambiente e contribuem 
                            para um futuro mais verde. Todos os nossos processos são pensados para minimizar impactos 
                            ambientais, sem comprometer a qualidade e eficiência dos nossos produtos.
                        </p>
                        <p>
                            A ética profissional é a base do nosso trabalho. Mantemos relacionamentos transparentes e 
                            confiáveis com nossos parceiros e clientes, prezando pela integridade em 
                            todas as nossas ações. Acreditamos que sucesso e ética caminham lado a lado, 
                            e essa filosofia reflete em cada entrega que fazemos.

                        </p>
                    </div>
                </Bloc>
                <Bloc>
                    <img src="/Home/Foto_Sobre_2.jpg" alt="about"/>
                </Bloc>
            </Container>
            <Container classe="orange">
                <h1 className="margin">Localização</h1>           
            </Container>
            <Container classe="full-container">
            <Mapa></Mapa>
            </Container>
            <br></br>
            <br></br>
            <Container classe="full-container" scrollref={contactRef}>
                <h1 className="margin">Entre em contato conosco</h1>
            </Container>
            <Container classe="full-container">
                <Bloc>
                    <img className="contactimg" src="/Home/foto_Contato.jpg" alt="about"/>
                </Bloc>
                <Contact></Contact>
            </Container>

        </div>
        </>
    )
}

