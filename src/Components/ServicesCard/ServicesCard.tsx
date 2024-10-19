import "./style.css"
interface CardProps {
    name:string,
    description:string
}
export default function ServicesCard({name, description}:CardProps){
    return(
        <div className="text-box" id="simpleCard">
            <div className="text-group">
                <h2 className="nameLabel">{name}</h2>
                <div>{description}</div>
            </div>
        </div>
    )
}