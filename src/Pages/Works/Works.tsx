
import  "./style.css"
import {pecuaria, Industrial, fertilizantes} from "../../data/index"
import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';
import { ScrollRestoration } from "react-router-dom";
import CollapsedButton from "../../Components/CollapsedButton/CollapsedButton"
import NavBar from "../../Components/NavBar/NavBar";
export default function Works (){
    const [selected, setSelected] = useState(pecuaria);
    const [searchParams] = useSearchParams();

    const paramValue = searchParams.get('idProduct');
    const [isFilter, setIsFilter] = useState(paramValue || false);

    useEffect(() => handleFilter(paramValue), [paramValue]);
    function handleFilter(filter:string|null){
        setIsFilter(!isFilter);
        if(filter === "pecuaria"){
            setSelected(pecuaria);
        }else if(filter === "industrial"){
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setSelected(Industrial as any);
        }else if(filter === "fertilizantes"){
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setSelected(fertilizantes as any);
        }
    }
    return(
        <>
        <NavBar></NavBar>
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
            <div className="product-list">
                {selected.map((el, index:number) => (
                    <CollapsedButton name={el.name} imgCard={el.imgCard} description={el.description} key={index} isFilter={isFilter}/> 
                    ))}
                </div>
                <br></br>
                <br></br>

        </div>
        </>
    )
}

