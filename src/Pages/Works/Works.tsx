
import  "./style.css"
import Card from "../../Components/Card/Card"
import {pecuaria, Industrial, fertilizantes} from "../../data/index"
import {Mosaic,Bloc} from "../../Components/Layout"
import { useState } from "react"
import { Link, ScrollRestoration } from "react-router-dom";

export default function Works (){
    const [selected, setSelected] = useState(pecuaria);
    function handleFilter(filter:string){
        if(filter === "pecuaria"){
            setSelected(pecuaria);
        }else if(filter === "industrial"){
            setSelected(Industrial);
        }else if(filter === "fertilizantes"){
            setSelected(fertilizantes);
        }
    }
    return(
        <div id="Produtos" className="full-container">
            <ScrollRestoration />
            <br></br>
            <h1>    
                Nossos Produtos
            </h1>
            <ul id="filter">
                <li><a onClick={() => handleFilter("pecuaria")}>Pecuária</a></li>
                <li><a onClick={() => handleFilter("industrial")}>Industrial</a></li>
                <li><a onClick={() => handleFilter("fertilizantes")}>Fertilizantes</a></li>
            </ul>
            <Mosaic>
                {selected.map((el, index:number) => (
                    <Bloc key={index}>
                        <Link to={`/produtos/${el.path}`}>
                        <div className="card-product"> 

                        </div>
                        </Link>
                        <h3>{el.name}</h3>
                        <span>{el.description}</span>
                    </Bloc>
                ))}
            </Mosaic>
        </div>
    )
}

