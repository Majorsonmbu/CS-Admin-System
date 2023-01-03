import React from 'react'
import axios from 'axios'
import '../css/Register.css'
import {useNavigate, Link } from 'react-router-dom';
import Login from './Login'

export default function Register(){
    const apiUrl = 'http://127.0.0.1:8000/api';
    const navigateLogin = useNavigate();
    
    /* INPUT HANDLERS FROM REGISTRATION FORM */
    const[first_name, setFirstName] = React.useState("")
    const[last_name, setLastName] = React.useState("")
    const[student_number, setStudentNumber] = React.useState("")
    const[student_email, setStudentEmail] = React.useState("")

    function HandleFirstNameChange(event){
        event.preventDefault()
        setFirstName(event.target.value)
    }

    function HandleLastNameChange(event){
        event.preventDefault()
        setLastName(event.target.value)
    }

    function HandleStudentNumberChange(event){
        event.preventDefault()
        setStudentNumber(event.target.value)
    }    

    function HandleStudentEmail(event){
        event.preventDefault()
        setStudentEmail(event.target.value)
    } 
    /* INPUT HANDLERS FROM REGISTRATION FORM END*/

    /* SUBMIT FORM TO BACKEND */
    function HandleStudentRegistration(event){
        event.preventDefault()
        alert("Successfully Registered")

        const formData = new FormData()
        formData.append("first_name", first_name)
        formData.append("last_surname", last_name)
        formData.append("student_number", student_number)
        formData.append("password", "N/A")
        formData.append("email", student_email) 

        //when submitting file, no need to change it to formDataObject
        axios({
            // Endpoint to send registration data to backend
            url: apiUrl + "/students/",
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Accept": "*/*",
            },
            // Attaching the form data
            data: formData,
            })
            .then((res) => { 
                console.log(res);
            }) // Handle the response from backend here
            .catch((err) => { 
                console.log(err);
            }); // Catch errors if any

            navigateLogin("/")
    }
    /* SUBMIT FORM TO BACKEND END*/

    return(
        <div className="register-form">
            <form className="form-container" onSubmit={HandleStudentRegistration}>
                <h1 className="register-text">Enter Your Student Details Below</h1>
                <label>Enter Your First Name: </label>
                <input
                    name="student_firstName"
                    onChange={HandleFirstNameChange}
                    type="text"
                    value={first_name}
                />
                <label>Enter Your Last Name: </label>
                <input
                    name="student_lastName"
                    onChange={HandleLastNameChange}
                    type="text"
                    value={last_name}
                />
                <label>Enter Your Student Number: </label>
                <input
                    name="student_number"
                    onChange={HandleStudentNumberChange}
                    type="text"
                    value={student_number}
                />
                <label>Enter Your Email: </label>
                <input
                    name="student_email"
                    onChange={HandleStudentEmail}
                    type="email"
                    value={student_email}
                />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}