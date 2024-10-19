import "./style.css"
import { Link } from "react-router-dom";
interface CardProps {
    name:string,
    url:string,
    icon?:string
    classe?:string
    children?:JSX.Element | JSX.Element[]
    center?:boolean
}
export default function Card({name, url, icon, classe="", children, center}:CardProps){
    return(
        <div className="card">
            <Link to={url}>
                <div className={"text-box" + (center?" text-box-center":"")}>
                    <img className={classe+" icon"} src={icon} alt={name}/>
                    <h3>{name}</h3>
                </div>
                {children}
            </Link>
        </div>
    )
}