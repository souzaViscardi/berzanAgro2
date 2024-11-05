import "./style.css"
interface Props {
    imgCard:string,
    name:string,
    description:string,
    isFilter:boolean | string
}
import { useEffect, useRef, useState } from "react"

export default function CollapsedButton({name, imgCard, description, isFilter}:Props){
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState(false)
    const [collapse, setCollapse] = useState(false);

    const [contentHeight, setContentHeight] = useState(0);
  
    useEffect(() => {
      if (contentRef.current) {
        console.log(contentRef.current.scrollHeight)
        setContentHeight(contentRef.current.scrollHeight); 
      }
    }, [active]);
    useEffect(() => {
        setActive(false);
      }, [isFilter]);
    function handleClick(){
        console.log("click")
        setActive(!active)
        if(active){
            setCollapse(true)
        } else {
            setCollapse(false)
        }
    }
    return(
        <div id="CollapsedButton">
            <a onClick={handleClick} className="item-list">
                <div className="icon-box">
                    <img src={imgCard} alt="" />
                </div>
                <h3>{name}</h3>
            </a>
            <div style={{ "--content-height": `${contentHeight}px` } as React.CSSProperties} className={"description"+ (!active ? "" : " show") + (collapse? " colapse" :  " ") } ref={contentRef}>
                {description && <span>{description}</span>}
            </div>
        </div>
    )
}