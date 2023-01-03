import React from "react"
import MenuIcon from "../images/menu-line.png"
import "../css/TAToolbar.css"


export default function TAToolbar(props) {
    // const[studentFirstName, setStudentFirstName] = React.useState(Login);
    return (
        <div className="toolbar">
            <div className="menu">
                <img src={MenuIcon} alt="menu"/>
            </div>
            <div className="toolbar-title">COMPUTER SCIENCE 2 ADMINISTRATION SYSTEM</div>
             <h3>{props.taFinalFirstName}</h3>
             
        </div>
    )
}