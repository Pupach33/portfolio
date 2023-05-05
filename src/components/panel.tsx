import Link from "next/link";
import CustomLink from "./CustomLink";

export default function Panel(){
    return (
        <div className="panel">
            <CustomLink href="/"  classna="panel_button">Houme</CustomLink>
            <CustomLink href="/contact"  classna="panel_button">Contact</CustomLink>
            <CustomLink href="/about"  classna="panel_button">About</CustomLink>
            <CustomLink href="/project"  classna="panel_button">Project</CustomLink>
          
        </div>
    )
}