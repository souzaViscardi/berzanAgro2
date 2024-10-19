import "./style.css"
interface Props {
    response:string,
    ask:string,
}
import { useState } from "react"

export default function CollapsedButton({ask, response}:Props){
    const [active, setActive] = useState(false)
    function handleClick(){
        setActive(!active)
    }
    return(
        <div id="CollapsedButton">
            <button onClick={handleClick}>{ask}</button>
            <div hidden={!active}>
                {response}
            </div>
        </div>
    )
}