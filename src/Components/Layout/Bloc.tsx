import "./style.css"
type Props = {
    children?: string | JSX.Element | JSX.Element[]
    id?:string
    className ?: string
  }
export default function Bloc({children,id, className="" }:Props){
    return(
    <div id={id? id: ""} className={`${className} bloco`}>
        {children}
    </div>
    )
}