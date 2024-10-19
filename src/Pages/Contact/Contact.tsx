import  "./style.css"     

import {Container,Bloc} from "../../Components/Layout"
import { ScrollRestoration } from "react-router-dom";
import { useState } from "react";

const validarEmail = (email:string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
export default function Contact() {
    let [result, setResult] = useState("");
    let [error, setError] = useState(false);
    console.log(error)
    const handleChangeEmail = (e:any) => {
        let valid = validarEmail(e.target.value)
        setError(!valid)
        valid ? setResult("") : setResult("E-mail inválido")
    }
    const handleSubmit = (event:any) => {
        event.preventDefault();
        let form = event.target;
        console.log('Valor do input:');
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        console.log(object)
        let valid = true
        Object.keys(object).forEach((key:any) => {
            if(object[key]=="")
                valid = false
        })
        if(!valid){
            alert("Preencha todos os campos!!!")
            return
        }
        const json = JSON.stringify(object);
    
        setResult("Please wait...");    
        setError(true)
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        })
            .then(async (response) => {
                console.log(response)
                let json = await response.json();
                    setResult(json.message);
            })
            .catch((error) => {
                console.log(error);
                setResult("Something went wrong!");

            })
            .then(function () {
                form.reset();
                setError(false)
                setTimeout(() => {
                    setResult("");
                }, 5000);
            });
    };
  return (
        <div className="full-container" id="Contact">
            <ScrollRestoration />
            <Container classe="container margin-top">
                <Bloc>
                    <h1>Olá</h1>
                    <span>Estamos ansiosos pela sua mensagem! envie agora mesmo e retornaremos o contato.</span>
                        <form id="ajax-form" onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="99b62a62-32c4-4582-8894-d3b74cf77604"/>
                                <input  type="text" name="name" id="name" placeholder="Nome"/>
                                <input onChange={handleChangeEmail} type="email" name="email" id="email" placeholder="E-mail"/>
                                <textarea name="message" id="message" placeholder="Mensagem"></textarea>
                                <button disabled={error} className="theme-btn2">ENVIAR</button>
                            {<p className={error?"invalid":""} id="result">{result}</p>}
                            
                        </form>
                </Bloc>
                <Bloc>
                    <img src="./contact.jpg" alt="contact"/>
                </Bloc>
            </Container>
        </div>
        
  );
}   