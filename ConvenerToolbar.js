import React from "react"
import MenuIcon from "../images/menu-line.png"
import Login from "./Login"
import "../css/ConvenerToolbar.css"
import Convener from "./Convener"

export default function ConvenerToolbar(props) {
    // const[studentFirstName, setStudentFirstName] = React.useState(Login);
    return (
        <div className="toolbar">
            <div className="menu">
                <img src={MenuIcon} alt="menu"/>
            </div>
            <div className="toolbar-title">COMPUTER SCIENCE 2 ADMINISTRATION SYSTEM</div>
             <h3>{props.convenerFinalFirstName}</h3>
             
        </div>
    )
}