import React from 'react'
import Toolbar from "./Toolbar"
import Sidebar from "./Sidebar"
import "../css/Toolbar.css"
import "../css/Sidebar.css"
import { Link, useNavigate , useLocation} from 'react-router-dom';
import Login from "./Login"

function Student(){

    const location = useLocation();
    const navigateToolbar = useNavigate();

    return(
        <div className='student-page'>
            <Toolbar studentFinalFirstName={location.state.name}/>
            <Sidebar studentFinalFirstName={location.state.name} studentFinalStudentNumber={location.state.stuNum}/>
        </div>
    )
}

export default Student