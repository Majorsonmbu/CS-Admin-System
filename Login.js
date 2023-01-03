import React from 'react';
import "../css/Login.css";
import uctIcon from "../images/uctIcon.png";
import studentId from "../images/studentID.png";
import {useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Student from "./Student"
import Convener from './Convener';
import TA from './TA'


function Login(){

    const navigateLogin = useNavigate();

    const apiUrl = 'http://127.0.0.1:8000/api'

    let loggedInStudentFirstName = ""
    let isStudentLoggedIn = false;    /* Student Login State */
    const [allStudents, setAllStudents] = React.useState([])

    try {
        React.useEffect(() => {
            axios.get(apiUrl+'/students').then((response) => {
                setAllStudents(response.data)
            });
        },[]);
    }
    catch(error){
        console.log(console.error())
    }

    let loggedInConvenerFirstName = ""
    let isConvenerLoggedIn = false
    const[conveners, setConveners] = React.useState([])

    try {
        React.useEffect(() => {
            axios.get(apiUrl+'/courseconveners').then((response) => {
                setConveners(response.data)
            });
        },[]);
    }
    catch(error){
        console.log(console.error())
    }


    /* Teaching Assistant Login */
    let isTALoggedIn = false
    let loggedInTAFirstName= ""
    const[teachingAssistants, setTeachingAssistants] = React.useState([])

      try {
        React.useEffect(() => {
            axios.get(apiUrl+'/teachingassistants').then((response) => {
                setTeachingAssistants(response.data)
            });
        },[]);
    }
    catch(error){
        console.log(console.error())
    }

    /* One Login Input Test */
    const [loginCredentialsInput, setLoginCredentialsInput] = React.useState("")

    function handleLoginCredentialsOnchange(event) {
        event.preventDefault()
        setLoginCredentialsInput(event.target.value)
    }

    let loginCredentials = "";
    
    function HandleGlobalLogin(){
        loginCredentials = loginCredentialsInput;
        //Checks if its ta logged in
        teachingAssistants.map(taLogins => {
            if(taLogins.staff_number === loginCredentials){
                isTALoggedIn = true
                loggedInTAFirstName = taLogins.first_name
                navigateLogin("/TeachingAssistant", {state : {name: taLogins.first_name, staffNum: taLogins.staff_number}})
            }
        })
        //Checks if its convener logged in
        conveners.map(convener => {
            if(convener.staff_number === loginCredentials){
                isConvenerLoggedIn = true
                loggedInConvenerFirstName = convener.first_name
                navigateLogin("/courseConvener", {state : {name: convener.first_name, staffNum: convener.staff_number}})
            }
        })
        //Checks if its student logged in
        allStudents.map(student => {
            if(student.student_number === loginCredentials){
                isStudentLoggedIn = true
                loggedInStudentFirstName = student.first_name
                navigateLogin("/Student", {state : {name: student.first_name, stuNum: student.student_number}})
            }
        })

        // if(isStudentLoggedIn === false && isConvenerLoggedIn === false && isTALoggedIn === false){

        // }
    }
    /* One Login Input Test END*/

    return(
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                        <img src={uctIcon} alt="uctIcon" className="uctIcon"/>
                        </div>
                    </div>
                <div>

                    <h1> CS2 ADMINISTRATION SYSTEM</h1>

                    <div>
                        <img src={studentId} alt="studentId" className="studentId"/>
                        <input 
                            onChange={handleLoginCredentialsOnchange} 
                            type="text" 
                            placeholder="Student/Staff Number" 
                            className="studentText"
                            value={loginCredentialsInput}
                        />      
                    </div>

                    <div className="login_button">
                        <button className="buttonColour" onClick={(e) => HandleGlobalLogin()}> Login </button>
                    </div>
                    <br/>
                    <p className="register-text">Not A Registered Student With The CS2ADMIN System?</p>
                    {/* <a href={"https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles"} target="_blank" rel="noreferrer"> Register Here</a> */}
                    <Link to="/Register"> Register Here </Link>
                </div>
            </div>
        </div>
     </div>
     
    )
    {isStudentLoggedIn && <Student stuFirstName={loggedInStudentFirstName}/>}
    {isConvenerLoggedIn && <Convener convenerFirstName={loggedInConvenerFirstName}/>}
    {isTALoggedIn && <TA taFirstName={loggedInTAFirstName}/>}
}

export default Login;