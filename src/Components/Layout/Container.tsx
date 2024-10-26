import "./style.css"
type Props = {
    children?: string | JSX.Element | JSX.Element[]
    classe?: string
    scrollref?: React.Ref<HTMLDivElement>
  }
export default function Container({children, classe, scrollref}:Props){
    return(
    <div id="container" className={classe} ref={scrollref}>
        {children}
    </div>
    )
}