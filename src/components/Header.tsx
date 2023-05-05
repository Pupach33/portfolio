import Link from "next/link"
import { useState } from "react"
import CustomLinkForHeader from "./CustomLinkForHeader"


export default function Header(){
    const [strel,setStrel] = useState(true)
    function visible(){
        setStrel(!strel)
    }
    return(
    <div className="header">
        
        <div className="_header2">
          <div className="_header">
            <div> 
            <div ><Link  href="/"><img src="/main.png" alt="" /></Link></div>
            <div ><Link  href="/project"><img src="/search.png" alt="" /></Link></div>
            <div ><Link  href="/about"><img src="/branch.png" alt="" /></Link></div>
            <div ><Link  href="/contact"><img src="/debug.png" alt="" /></Link></div>
            <div ><Link  href=""><img src="/mod.png" alt="" /></Link></div>
           </div> 
     </div>
     <div  className="_header3">
        <h1 className="port">Portfolio</h1>

         <button  onClick={visible} className=" arrow_button" > <p className={strel?"arrow":"revarrow"}>&gt;</p>Protfolio</button>   
        {strel?(<div className="_header3">
       
        <CustomLinkForHeader  classna="button" href="/">Houme</CustomLinkForHeader>
        <CustomLinkForHeader  classna="button" href="/contact">Contact</CustomLinkForHeader>
        <CustomLinkForHeader  classna="button" href="/about">About</CustomLinkForHeader>
        <CustomLinkForHeader  classna="button" href="/project">Project</CustomLinkForHeader>
       
        </div>):""}
        
    </div>  
        </div>
    
    </div>
    )
}