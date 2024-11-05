import "./style.css" 
import { Link } from "react-router-dom";
interface Props{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contactRef?: any | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    aboutRef?: any | null;
};
export default function NavBar({contactRef,aboutRef}:Props){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function scrollToDiv (divRef: any) {
        console.log("clikcei", divRef)
        if(!divRef) return;
        const topPosition = divRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
      };
    return(
        <>
        <ul id="navbar">
            <div className="containerNav">
                <Link to="/">
                    <img className="logo" src="/Berzanbranco.png" alt="logo"/>
                </Link>
                <div className="blocoNav">
                    <li><a href="/">Home</a></li>
                    {aboutRef && <li><a onClick={() => scrollToDiv(aboutRef)}>Sobre</a></li>}
                    {contactRef && <li><a onClick={() => scrollToDiv(contactRef)}>Contato</a></li>}
                    <li><a href="/Produtos">Produtos</a></li>
                </div>
            </div>


        </ul>
    </>
    )
}