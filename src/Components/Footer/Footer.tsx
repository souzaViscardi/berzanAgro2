import {Bloc, Container} from "../Layout";
import "./style.css"
export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Para um efeito de rolagem suave
    });
};
  return (
    <>
        <div id="Footer">
            <h1 className="gradient-collor fourp-name">STUDIO FOURP</h1>
            <div className="location">
                <div><b>© 2024 STUDIO FOURP</b></div>
                <div><a onClick={handleScrollToTop}>VOLTAR AO TOPO</a></div>
            </div>
            <hr></hr>
            <Container classe="full-container">
              <Bloc>
                <h2>REDES SOCIAS</h2>
                <a href="https://www.instagram.com/studiofourp/">INSTAGRAM <img className="icon" src="/instagram.png" /></a>
                <a href="https://www.tiktok.com/@studio.fourp">TIKTIOK <img className="icon" src="/tiktok.png" /></a>
                <a href="https://www.linkedin.com/company/studiofourp">LINKEDIN <img className="icon" src="/linkedin.png" /></a>
              </Bloc>
              <Bloc>    
                <h2>LOCALIZAÇÂO</h2>
                <span>CAMPINAS, SP</span>
                <span>BRASIL</span>
              </Bloc>
              <Bloc>    
                <h2>TELEFONE</h2>
                <a href="tel:+5519998609331">BR     +55 19 99860-9331</a>
              </Bloc>
              <Bloc>    
                <h2>EMAIL</h2>
                <a href="mailto:contato@studiofourp.com">CONTATO@STUDIOFOURP.COM</a>
              </Bloc>
            </Container>
      
        </div>
    </>
  );
}