import {Container} from "../Layout";
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
            <div className="location">
                <div><a className="margin" onClick={handleScrollToTop}>VOLTAR AO TOPO</a></div>
            </div>
            {/* <h1>Onde nos encontrar</h1> */}

            <Container>
                    <div className="box">
                      <Container>
                          <img src="/wpp.png" alt="logo"/>
                            <div className="info-box">
                              <h2>WhatsApp</h2>
                              <a target="blank" href="https://api.whatsapp.com/send?phone=5511942992691&text=Olá%20Gostaria%20de%20saber%20mais%20sobre%20os%produtos%20da%berzan.">+55 (11) 94299-2691</a>
                            </div>
                      </Container>
                      <Container>
                          <img src="/email.png" alt="logo"/>
                          <div className="info-box">
                              <h2>Email</h2>
                              <a href="mailto:lucaszanni.berzan@outlook.com">lucaszanni.berzan@outlook.com</a>
                            </div>
                      </Container>
                      <Container>
                          <img src="/linkedin.png" alt="logo"/>
                          <div className="info-box">
                              <h2>Linkedin</h2>
                              <a href="">Berzan Agro</a>
                            </div>
                      </Container>
                    </div>
          
            </Container>
            <span>Berzan Produtos Agropecuários LTDA Copyrights 2024</span>

      
        </div>
    </>
  );
}