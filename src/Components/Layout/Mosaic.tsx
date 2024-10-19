import "./style.css"
type Props = {
    children: string | JSX.Element | JSX.Element[]
    classe?: string

  }
export default function Mosaic({children,classe}:Props){
    return(
    <div id="mosaic" className={classe}>
        {children}
    </div>
    )
}