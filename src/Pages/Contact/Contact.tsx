import  "./style.css"     
import {Container,Bloc} from "../../Components/Layout"
import { useState } from "react";

const validarEmail = (email:string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
export default function Contact() {
    const [result, setResult] = useState("");
    const [error, setError] = useState(false);
    console.log(error)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChangeEmail = (e:any) => {
        const valid = validarEmail(e.currentTarget.value)
        setError(!valid)
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        valid ? setResult("") : setResult("E-mail inválido")
    }
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log('Valor do input:');
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        console.log(object)
        let valid = true
        Object.keys(object).forEach((key) => {
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
                const json = await response.json();
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
        <div id="Contact">
                <Bloc>
                        <form id="ajax-form" onSubmit={(event:React.FormEvent<HTMLFormElement>)=>handleSubmit(event)} action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="c9b62a49-0107-42ac-9110-976cc4fe8656"/>
                            <Container >
                                <Bloc className="right">
                                    <input  type="text" name="name" id="name" placeholder="Nome"/>
                                    <input onChange={handleChangeEmail} type="email" name="email" id="email" placeholder="E-mail"/>
                                </Bloc>
                                <Bloc className="left">
                                    <input  type="text" name="empresa" id="empresa" placeholder="Empresa"/>
                                    <input onChange={handleChangeEmail} type="telefone" name="telefone" id="telefone" placeholder="telefone"/>
                                </Bloc>
                            </Container>
                            
                            <textarea name="message" id="message" placeholder="Mensagem"></textarea>
                                <button disabled={error} className="theme-btn2">ENVIAR</button>
                                {<p className={error?"invalid":""} id="result">{result}</p>}
                        </form>
                </Bloc>
        </div>
  );
}   