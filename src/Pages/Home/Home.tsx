
import  "./style.css"
import Card from "../../Components/Card/Card"
import {Container,Bloc} from "../../Components/Layout"
import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

export default function Home(){
    return(
        <div id="home" className="full-container">
            <ScrollRestoration />
            <Container classe="imgContainer">
            <div className="titleOverflow">
                <h1>Soluções de</h1>
                <h1>Alta Performance</h1>
                <span>Potencialize sua Produção com Produtos de Qualidade</span>
            </div>

                <video autoPlay className="aboutImg" src={"Home/video_home.mp4"} loop={true} muted={true}></video>            
            </Container>
            <Container classe="secondary">
                    <h1 className="left"> Nossas Linhas de Produtos</h1>
            </Container>
            <Container classe="secondary">    
                <div id="linhaProdutos">
                    <Card name="Pecuária" url="/Produtos/pecuaria" icon="/Home/iconPecuaria.png">
                        <img className="aboutImg" src="/Home/pecuaria.jpg" alt="about"/>
                    </Card>
                    <Card center={true} name="Fertilizantes" url="/Produtos/fertilizantes" icon="/Home/iconFertilizantes.png">
                        <img className="aboutImg centerImg" src="/Home/fertilizantes.jpg" alt="about"/>
                    </Card>
                    <Card name="Industria" url="/Produtos/industria" icon="/Home/iconIndustria.png">
                    <img className="aboutImg" src="/Home/industria.jpg" alt="about"/>
                    </Card>
                </div>
            </Container>
            <Container>
                <br/>
                <h1 className="title">    
                    Sobre a Nossa Empresa
                </h1>
                <br/>
            </Container>
            <Container>
                <Bloc>
                    <img src="/Home/Foto_Sobre_1.jpg" alt="about"/>
                </Bloc>
                <Bloc>  
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
                <Bloc>  
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
            <Container classe="imgContainer">
                <img className="aboutImg" src="/about.png" alt="about"/>
            </Container>
            <Container>
                <h2  className="gradient-collor">BY PEOPLE, FOR PEOPLE</h2>
            </Container>
            <Container>
                <h3>Fundada em 2023, a Fourp tem como objetivo transformar ideias em realidades através do design. Somos uma agência de Design, audiovisual e marketing, comprometida em transmitir a mensagem mais impactante e memorável por meio de ideias criativas e inovadoras. Nossa missão é elevar a sua marca ao próximo nível, garantindo que sua mensagem seja comunicada de forma eficaz.</h3>
            </Container>
            <Container>
                <Bloc>
                    <h1 className="left"> NOSSOS<br/> SERVIÇOS</h1>
                </Bloc>
                <Bloc>
                    
                </Bloc>
            </Container>

            <Container>
                <Bloc>
                    <h1 className="left">NOSSA<br/> INSPIRAÇÃO</h1>
                </Bloc>
                <Bloc>
                    <h3 className="description">Nossa inspiração vem da profunda conexão que criamos com nossos clientes e suas histórias únicas. Nossa missão é representar essas histórias de maneira autêntica, solucionando problemas com criatividade e entregando resultados excepcionais. Não nos contentamos com o comum; ao invés disso, buscamos transformar os conceitos visuais de nossos clientes em algo memorável e impactante, refletindo a essência de suas marcas de forma inovadora e personalizada.
                        <br></br>
                        <br></br>
                        Nossa visão é ser uma referência no mercado, lembrada por nosso compromisso em criar relacionamentos genuínos e duradouros. Na Fourp, valorizamos o trabalho ético, a responsabilidade social e o profissionalismo, e nos orgulhamos de ser uma empresa onde as pessoas se sentem acolhidas e valorizadas. Ao focar no cliente, cultivamos a coragem e a criatividade necessárias para oferecer soluções transparentes e eficazes. Com essa dedicação, não apenas cumprimos as demandas, mas também construímos vínculos de confiança que fortalecem a relação entre a empresa e seus clientes.
                    </h3>
                    <br></br>
                    <br></br>
                    <img className="logo" src="./signature.png"></img>
                </Bloc>
                
            </Container>
            <Container>
                <h1>FEEDBACKS DOS<br/>NOSSOS CLIENTES</h1>
            </Container>

            <Container>
                    <h1 >PERGUNTAS<br/>FREQUENTES</h1>

            </Container>

            <Container>
            <h1 >VAMOS TRABALHAR<br/>JUNTOS?</h1>
            </Container>
            <Container>
                <a className="button dark-theme" href="/contato">ENVIAR MENSSAGEM</a>
            </Container>
            <Container classe="imgContainer">
                <img className="aboutImg" src="/about-4.jpg" alt="about"/>
            </Container>
            <Container classe="imgContainer">
                <h2>NOS ACOMPANHE EM NOSSAS REDES SOCIAIS.</h2>
            </Container>
            <Container>
                <ul>
                    <li><Link target="_blank"  to="https://www.instagram.com/studiofourp/">INSTAGRAM</Link><img className="icon" src="/instagram.png" /></li>
                    <li><Link target="_blank"  to="https://www.tiktok.com/@studio.fourp">TIKTOK</Link><img src="/tiktok.png" /></li>
                    <li><Link target="_blank"  to="https://www.linkedin.com/company/studiofourp">LINKEDIN</Link><img src="/linkedin.png" /></li>
                </ul>
            </Container>
            
        </div>
    )
}

