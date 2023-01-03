import React from "react"
import "../css/ConvenerSidebar.css"
import DisputeIcon from "../images/dispute-icon.png"
import MissingIcon from "../images/missing-icon.png"
import {useEffect} from 'react'
import axios from 'axios'


export default function TASidebar(props) {
    const baseUrl = 'http://localhost:8000/api'

     /* Mark dispute and missing mark buttons */
     const[isMarkDisputeToggled, setMarkDisputeToggled] = React.useState(false)
     const[isMissingMarkToggled, setMissingMarkToggled] = React.useState(false)
   
  
    /* Fetching missing mark queries from the API */
    const [studentMissingMarks, setStudentMissingMarks] = React.useState([])

    try {
        useEffect(()=> {
            axios.get(baseUrl + '/missingmarks/').then((response)=>{
                setStudentMissingMarks(response.data);
                console.log(response.data);
                
            });
        },[]);
    }
    catch(error) {
        console.log(console.error())
    }
    /* Fetching missing mark queries from the API END*/
    const [studentMissingMarksReply, setStudentMissingMarksReply] = React.useState(null)
    const [studentMarkDisputeReply, setStudentMarkDisputeReply] = React.useState(null)

    function handleMissingMarkOnChange(event) {
        event.preventDefault()
        setStudentMissingMarksReply(event.target.value)
    }

    function handleMarkDisputeOnChange(event){
        event.preventDefault()
        setStudentMarkDisputeReply(event.target.value)
    }

    /* Fetching mark disputes */
    const [markDisputes, setMarkDisputes] = React.useState([])
 
    try {
        useEffect(()=> {
            axios.get(baseUrl + '/markdisputes/').then((response)=>{
                setMarkDisputes(response.data);
                console.log(response.data);
                
            });
        },[]);
    }
    catch(error) {
        console.log(console.error())
    }
    /* Fetching mark disputes END*/

    /* HANDLING MARK DISPUTES RESPONSE FROM TEACHING ASSISTANT START */
    const MarkDisputeResponseButton = (student_number,assessment_number, categoryType) => {
        return(
            <div>
                <fieldset>
                    <p>Student Number: {student_number}</p>
                    <p>Mark Dispute Assessment Number: {assessment_number}</p>
                    <input 
                        name="mark-dispute-reply"
                        onChange={handleMarkDisputeOnChange}
                        placeholder="Type your response to the student here.."
                        type="text"
                        className=""
                    />
                    <br/>
                </fieldset>
                <button onClick={() => handleMarkDisputesResponseClick(student_number,studentMarkDisputeReply, categoryType)}>
                    Send Reply
                </button>
            </div>
        )
    }

    function handleMarkDisputesResponseClick(student_number, studentMarkDisputeReply,categoryType) {
        const formData = new FormData()
        formData.append("student_number", student_number)
        formData.append("teaching_assistant_feedback", studentMarkDisputeReply)
        formData.append("categoryType", categoryType)
        
        const formDataObj = Object.fromEntries(formData.entries());
        //when submitting file, no need to change it to formDataObject
        axios({
            // Endpoint to send mark dispute reponse
            url: baseUrl + "/teachingassistantfeedback/",
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Accept": "*/*",
            },
            // Attaching the form data
            data: formDataObj,
            })
            .then((res) => { 
                console.log(res);
            }) // Handle the response from backend here
            .catch((err) => { 
                console.log(err);
            }); // Catch errors if any
        alert(`Feedback succesfully sent.`)
     }
 
    /* HANDLING MARK DISPUTES RESPONSE FROM TEACHING ASSISTANT START END*/

    /* HANDLING MISSING MARKS RESPONSE FROM TEACHING ASSISTANT START */
    function handleMissingMarksResponseClick(student_number, assessment_number, categoryType) {
       const formData = new FormData()
       formData.append("student_number", student_number)
       formData.append("teaching_assistant_feedback", studentMissingMarksReply)
       formData.append("categoryType", categoryType)
       
       const formDataObj = Object.fromEntries(formData.entries());
       //when submitting file, no need to change it to formDataObject
       axios({
           // Endpoint to send join vula course query
           url: baseUrl + "/teachingassistantfeedback/",
           method: "POST",
           headers: {
               "content-type": "application/json",
               "Accept": "*/*",
           },
           // Attaching the form data
           data: formDataObj,
           })
           .then((res) => { 
               console.log(res);
           }) // Handle the response from backend here
           .catch((err) => { 
               console.log(err);
           }); // Catch errors if any
        alert(`Feedback succesfully sent.`)
    }

        const MissingMarkResponseButton = (student_number,assessment_number, categoryType) => {
        return(
            <div>
                <fieldset>
                    <p>Student Number: {student_number}</p>
                    <p>Missing Assessment Number: {assessment_number}</p>
                    <input 
                        name="missing-mark-reply"
                        onChange={handleMissingMarkOnChange}
                        placeholder="Type your response to the student here.."
                        type="text"
                        className=""
                    />
                    <br/>
                </fieldset>
                <button onClick={() => handleMissingMarksResponseClick(student_number, assessment_number,studentMissingMarksReply, categoryType)}>
                    Send Reply
                </button>
            </div>
        )
    }
    /* HANDLING MISSING MARKS RESPONSE FROM TEACHING ASSISTANT END */

    return (

        /* Parent div 'main-content' is to be shown on the screen
            beneath the header, displaying a sidebar to the left
            and application content to the right of the sidebar
        */
       
        <div className="main-content">
            <div className="sidebar">
            
                <li> 
                    <button onClick={()=> setMarkDisputeToggled(!isMarkDisputeToggled)} className="queryButton" >Mark Dispute</button>
                    <img className="dispute-icon" src={DisputeIcon} alt="feedback"/>
                </li>
                <li>
                    <button onClick={()=> setMissingMarkToggled(!isMissingMarkToggled)} className="queryButton">Missing Mark</button> 
                    <img className="missing-icon" src={MissingIcon} alt="feedback"/>
                </li>
            </div>
            <div className="rightside-content">
                <h1 className="header"> Welcome, {props.taFinalFirstName}!</h1>
                <p> This is your admin platform for CS2. Select from any of the menu options to view received general student queries. </p>
                <br/>
                {

                    (isMarkDisputeToggled &&
                        <div className="markDispute-item-container">
                            {markDisputes.map((markDispute) => {
                                return MarkDisputeResponseButton(markDispute.student_number, markDispute.assessment_number, markDispute.categoryType);
                            })}
                         </div>
                    )

                    ||

                    (isMissingMarkToggled &&
                        <div className="missingMark-item-container">
                            {studentMissingMarks.map((missingMarks) => {
                                return MissingMarkResponseButton(missingMarks.student_number,missingMarks.missingAssessmentNumber, missingMarks.categoryType);
                            })}
                        </div>
                    )
          
                }


            </div>
           
        </div>
    
    )
    
}