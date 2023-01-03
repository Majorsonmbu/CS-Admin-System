import React from "react"
import MenuIcon from "../images/menu-line.png"
import Login from "./Login"
import "../css/Toolbar.css"
import Student from "./Student"

export default function Toolbar(props) {
    // const[studentFirstName, setStudentFirstName] = React.useState(Login);
    return (
        <div className="toolbar">
            <div className="menu">
                <img src={MenuIcon} alt="menu"/>
            </div>
            <div className="toolbar-title">COMPUTER SCIENCE 2 ADMINISTRATION SYSTEM</div>
             <h3>{props.studentFinalFirstName}</h3>
             
        </div>
    )
}
