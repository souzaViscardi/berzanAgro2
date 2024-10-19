import "./style.css"
interface CardProps {
    name:string,
    description:string,
    img:string,
    role:string
}
export default function TestimonialCard({name, img, description, role}:CardProps){
    return(
    <div id="testimonialCard" className="card">
        <div>
            <img className="img-testimonial left" src={img} alt={name}/>
            <h3><b>{name}</b> <br/> {role}</h3>

        </div>
        <span>{description}</span>
    </div>
    )
}