import React from 'react'
import TAToolbar from "./TAToolbar"
import TASidebar from "./TASidebar"
import "../css/TAToolbar.css"
import "../css/TASidebar.css"
import { Link, useNavigate , useLocation} from 'react-router-dom';
import Login from "./Login"

function TA(){

    const location = useLocation();
    const navigateToolbar = useNavigate();

    return(
        <div className='ta-page'>
            <TAToolbar taFinalFirstName={location.state.name}/>
            <TASidebar taFinalFirstName={location.state.name}/>
        </div>
    )
}

export default TA