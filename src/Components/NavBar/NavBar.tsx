import "./style.css"
export default function NavBar(){
    return(
        <>
        <img className="logo" src="/logo.png" alt="logo"/>
        <ul id="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/Produtos">Produtos</a></li>
            <li><a href="/contato">Contato</a></li>
        </ul>
    </>
    )
}