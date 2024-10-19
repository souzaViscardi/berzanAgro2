import "./style.css"
type Props = {
    children: string | JSX.Element | JSX.Element[]
  }
export default function Carousel({children}:Props){
    return(
    <div id="carousel">
            {children}
    </div>
    )
}