import React from "react"
import ConvenerToolbar from "./ConvenerToolbar"
import ConvenerSidebar from "./ConvenerSidebar"
import {useEffect} from "react"
import { Link, useNavigate , useLocation} from 'react-router-dom';
import Login from "./Login"


export default function Convener() {

    const location = useLocation();
    return (
        <div className="convener-app">
            <ConvenerToolbar convenerFinalFirstName={location.state.name}/>
            <ConvenerSidebar convenerFinalFirstName={location.state.name}/>
        </div>
      );
}