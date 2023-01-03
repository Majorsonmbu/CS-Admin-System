import React from "react"
import "../css/ConvenerSidebar.css"
import JoinIcon from "../images/join-icon.png"
import ExtensionIcon from "../images/extension-icon.png"
import WaiverIcon from "../images/waiver-icon.png"
import ConcessionIcon from "../images/concession-icon.png"
import StrugglingIcon from "../images/heartbreak.png"
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function ConvenerSidebar(props) {
    const baseUrl = 'http://localhost:8000/api'
    const [joinVulaCourseSite, setJoinVulaCourseSite] = useState(null);
    const [testConcessions, setTestConcessions] = useState(null);
    const [assignmentWaivers, setAssignmentWaivers] = useState(null);
    const [assignmentExtentions, setAssignmentExtentions] = useState(null);

    /* FETCHING JOIN VULA COURSE SITE QUERIES FROM API */
    try {
        useEffect(()=> {
            axios.get(baseUrl + '/joinvulacourses/').then((response)=>{
                setJoinVulaCourseSite(response.data);
            });
        },[]);
    }
    catch(error) {
        console.log(console.error())
    }
    /* FETCHING JOIN VULA COURSE SITE QUERIES FROM API  END*/

    /* FETCHING ASSIGNMENT EXTENTION QUERIES FROM API*/ 
    try {
        useEffect(()=> {
            axios.get(baseUrl + '/assignmentextentions/').then((response)=>{
                setAssignmentExtentions(response.data);
            });
        },[]);
    }
    catch(error) {
        console.log(console.error())
    }
    /* FETCHING ASSIGNMENT EXTENTION QUERIES FROM API* END/   

    /* FETCHING ASSIGNMENT WAIVER QUERIES FROM API */
    try {
        useEffect(()=> {
            axios.get(baseUrl + '/assignmentwaivers/').then((response)=>{
                setAssignmentWaivers(response.data);
            });
        },[]);
    }
    catch(error) {
        console.log(console.error())
    }
    /* FETCHING ASSIGNMENT WAIVER QUERIES FROM API END*/

    /* GET TEST CONCESSION QUERIES FROM API*/
    try {
        useEffect(()=> {
            axios.get(baseUrl + '/testconcessions/').then((response)=>{
                setTestConcessions(response.data);
            });
        },[]);
    }
    catch(error) {
        console.log(console.error())
    }
    /* GET TEST CONCESSION QUERIES FROM API END*/
    

    /* Fetching student assignment marks to see struggling students. */
    const[studentAssignments, setStudentAssignments] = React.useState([])
    const[strugglingStudents, setStrugglingStudents] =  React.useState([])

    try {
        useEffect(()=> {
            axios.get(baseUrl + '/assignments/').then((response)=>{
                setStudentAssignments(response.data);
                studentAssignments.map(aStudentsAssignments => {
                    let aStudentsAvg = 0
                    aStudentsAvg = (aStudentsAssignments.assignment_one + aStudentsAssignments.assignment_two + aStudentsAssignments.assignment_three)/3
                    if(aStudentsAvg <45) {
                        setStrugglingStudents(currentStrugglingStudents => [...currentStrugglingStudents, aStudentsAssignments])
                    }
                })
            });
        },[]);
    }
    catch(error) {
        console.log(console.error())
    }
    /* Fetching student assignment marks to see struggling students END*/

    const[isJoinVulaSiteToggled, setIsJoinVulaSiteToggled] = React.useState(false)
    const[isAssignmentExtentionToggled, setAssignmentExtentionToggled] = React.useState(false)
    const[isAssignmentWaiverToggled, setAssignmentWaiverToggled] = React.useState(false)
    const[isTestConcessionToggled, seTestConcessionToggled] = React.useState(false)
    const[isStrugglingStudentsToggled, setStrugglingStudentsToggled] = React.useState(false)

    /* CONVENER REPLY TO TEST CONCESSION QUERIES AND POST METHOD FOR THE REPLIES */

    /*Test Concession Query Outcome Status*/
    const[testConcessionOutcomeStatus, setTestConcessionOutcomeStatus] = React.useState("")

    function handleTestConcessionOutcome(event) {
        event.preventDefault()
        setTestConcessionOutcomeStatus(event.target.value)
    }
    /*******Test Concession Query Outcome Status END*******/


    /* Test concession reply state */
    const[testConcessionReply, setTestConcessionReply] = React.useState("")
    function handleTestConcessionReplyOnChange(event) {
        event.preventDefault()
        setTestConcessionReply(event.target.value)
    }

    const TestConcessionReplyButton = (student_number,TestNumber,support_doc, categoryType) => {
        return(
            <div>
                <div className='query'>
                    <fieldset>
                        <h3>Student Number: {student_number}</h3>
                        <p>Test number: {TestNumber}</p>
                        <a href={support_doc} target="_blank" rel="noreferrer"> View Supporting Document </a>
                        <br/>
                        <br/>
                        <div className="query-outcome"> 
                            <fieldset>
                                    <legend> Outcome of Query </legend>
                                    <select
                                        id="outcome"
                                        onChange={handleTestConcessionOutcome}
                                        value={testConcessionOutcomeStatus}
                                    >
                                        <option value="APPROVED">Approve</option>
                                        <option value="DECLINED">Decline</option>
                                    </select> 
                                </fieldset> 
                        </div>
                        <input 
                            name="test-concession-reply"
                            onChange={handleTestConcessionReplyOnChange}
                            placeholder="Type your response to the student here.."
                            type="text"
                            className=""
                        />
                    </fieldset>
                    
                </div>
                <button onClick={() => handleTestConcessionReplyClick(student_number, TestNumber,testConcessionReply, categoryType)}>
                    SEND REPLY
                </button>
                <br/>
                <br/>
            </div>
        )
    }

    function handleTestConcessionReplyClick(student_number, TestNumber, categoryType) {
       const formData = new FormData()
       formData.append("student_number", student_number)
       formData.append("feedback_additional_info", testConcessionReply)
       formData.append("outcome", testConcessionOutcomeStatus)
       formData.append("categoryType", categoryType)
       
       const formDataObj = Object.fromEntries(formData.entries());
       axios({
           // Endpoint to send Course Convener Reply for Test Concession Queries
           url: baseUrl + "/convenerfeedback/",
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
    /* CONVENER REPLY TO TEST CONCESSION QUERIES AND POST METHOD FOR THE REPLIES END*/


    /* CONVENER REPLY TO JOIN VULA SITE QUERIES AND POST METHOD FOR THE REPLY */
    const[joinVulaSiteOutcomeStatus, setJoinVulaSiteOutcomeStatus] = React.useState("")

    function handleJoinVulaSiteOutcome(event) {
        event.preventDefault()
        setJoinVulaSiteOutcomeStatus(event.target.value)
    }
    /*******Join Vula Site Query Outcome Status END*******/


    /* Join Vula Site reply state */
    const[joinVulaSiteReply, setJoinVulaSiteReply] = React.useState("")
    function handleJoinVulaSiteReplyOnChange(event) {
        event.preventDefault()
        setJoinVulaSiteReply(event.target.value)
    }

    const JoinVulaSiteReplyButton = (student_number,support_doc, categoryType) => {
        return(
            <div>
                <div className='query'>
                    <fieldset>
                        <h3>Student Number: {student_number}</h3>
                        <a href={support_doc} target="_blank" rel="noreferrer"> View Supporting Document. </a>
                        <br/>
                        <br/>
                        <div className="query-outcome"> 
                            <fieldset>
                                    <legend> Outcome of Query </legend>
                                    <select
                                        id='outcome'
                                        onChange={handleJoinVulaSiteOutcome}
                                        value={joinVulaSiteOutcomeStatus}
                                    >
                                        <option value="APPROVED">Approve</option>
                                        <option value="DECLINED">Decline</option>
                                    </select>
                                </fieldset> 
                        </div>
                        <input 
                            name="test-concession-reply"
                            onChange={handleJoinVulaSiteReplyOnChange}
                            placeholder="Type your response to the student here.."
                            type="text"
                            className=""
                        />
                    </fieldset>
                    
                </div>
                <button onClick={() => handleJoinVulaSiteReplyClick(student_number,joinVulaSiteReply, categoryType)}>
                    SEND REPLY
                </button>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }

    function handleJoinVulaSiteReplyClick(student_number, joinVulaSiteReply, categoryType) {
        const formData = new FormData()
        //console.log(joinVulaSiteOutcomeStatus)
        formData.append("student_number", student_number)
        formData.append("feedback_additional_info", joinVulaSiteReply)
        formData.append("outcome", joinVulaSiteOutcomeStatus)
        formData.append("categoryType", categoryType)
        
        const formDataObj = Object.fromEntries(formData.entries());
        axios({
            // Endpoint to send Course Convener Reply for Join Vula Site Queries
            url: baseUrl + "/convenerfeedback/",
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
    /* CONVENER REPLY TO JOIN VULA SITE QUERIES AND POST METHOD FOR THE REPLY END*/


    /* CONVENER REPLY TO ASSIGNMENT EXTENTIONS AND POST METHOD FOR THE REPLY */
    const[assignmentExtentionOutcomeStatus, setAssignmentExtentionOutcomeStatus] = React.useState("")

    function handleAssignmentExtentionOutcome(event) {
        event.preventDefault()
        setAssignmentExtentionOutcomeStatus(event.target.value)
    }
    /*******Assignment EXtention Query Outcome Status END*******/


    /* Assignment Extention reply state */
    const[assignmentExtentionReply, setAssignmentExtentionReply] = React.useState("")
    function handleAssignmentExtentionReplyOnChange(event) {
        event.preventDefault()
        setAssignmentExtentionReply(event.target.value)
    }

    const AssignmentExtentionReplyButton = (student_number,support_doc,assignmentNumber, categoryType) => {
        return(
            <div>
                <div className='query'>
                    <fieldset>
                        <h3>Student Number: {student_number}</h3>
                        <p>Assignment Number: {assignmentNumber}</p>
                        <a href={support_doc} target="_blank" rel="noreferrer"> View Supporting Document. </a>
                        <br/>
                        <br/>
                        <div className="query-outcome"> 
                            <fieldset>
                                    <legend> Outcome of Query </legend>
                                    <select
                                        id="outcome"
                                        onChange={handleAssignmentExtentionOutcome}
                                        value={assignmentExtentionOutcomeStatus}
                                    >
                                        <option value="APPROVED">Approve</option>
                                        <option value="DECLINED">Decline</option>
                                    </select> 
                                </fieldset> 
                        </div>
                        <input 
                            name="test-concession-reply"
                            onChange={handleAssignmentExtentionReplyOnChange}
                            placeholder="Type your response to the student here.."
                            type="text"
                            className=""
                        />
                    </fieldset>
                </div>
                <button onClick={() => handleAssignmentExtentionReplyClick(student_number,assignmentExtentionReply, categoryType)}>
                    SEND REPLY
                </button>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }

    function handleAssignmentExtentionReplyClick(student_number, assignmentExtentionReply, categoryType) {
        const formData = new FormData()
        formData.append("student_number", student_number)
        formData.append("feedback_additional_info", assignmentExtentionReply)
        formData.append("outcome", assignmentExtentionOutcomeStatus)
        formData.append("categoryType", categoryType)
        
        const formDataObj = Object.fromEntries(formData.entries());
        axios({
            // Endpoint to send Assignment Extention Reply for Assignment Extention Queries
            url: baseUrl + "/convenerfeedback/",
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
    /* CONVENER REPLY TO ASSIGNMENT EXTENTIONS AND POST METHOD FOR THE REPLY END*/

    /* CONVENER REPLY TO ASSIGNMENT WAIVERS AND POST METHOD FOR THE REPLY */
    const[assignmentWaiverOutcomeStatus, setAssignmentWaiverOutcomeStatus] = React.useState("")

    function handleAssignmentWaiverOutcome(event) {
        event.preventDefault()
        setAssignmentWaiverOutcomeStatus(event.target.value)
    }
    /*******Assignment Waiver Query Outcome Status END*******/


    /* Assignment Waiver reply state */
    const[assignmentWaiverReply, setAssignmentWaiverReply] = React.useState("")
    function handleAssignmentWaiverReplyOnChange(event) {
        event.preventDefault()
        setAssignmentWaiverReply(event.target.value)
    }

    const AssignmentWaiverReplyButton = (student_number,support_doc,waiveredAssignmentNumber, categoryType) => {
        return(
            <div>
                <div className='query'>
                    <fieldset>
                        <h3>Student Number: {student_number}</h3>
                        <p>Assignment Number: {waiveredAssignmentNumber}</p>
                        <a href={support_doc} target="_blank" rel="noreferrer"> View Supporting Document. </a>
                        <br/>
                        <br/>
                        <div className="query-outcome"> 
                            <fieldset>
                                    <legend> Outcome of Query </legend>
                                    <select
                                        id="outcome"
                                        onChange={handleAssignmentWaiverOutcome}
                                        value={assignmentWaiverOutcomeStatus}
                                    >
                                        <option value="APPROVED">Approve</option>
                                        <option value="DECLINED">Decline</option>
                                    </select> 
                                </fieldset> 
                        </div>
                        <input 
                            name="test-concession-reply"
                            onChange={handleAssignmentWaiverReplyOnChange}
                            placeholder="Type your response to the student here.."
                            type="text"
                            className=""
                        />
                    </fieldset>
                </div>
                <button onClick={() => handleAssignmentWaiverReplyClick(student_number,assignmentWaiverReply, categoryType)}>
                    SEND REPLY
                </button>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }

    function handleAssignmentWaiverReplyClick(student_number, assignmentWaiverReply, categoryType) {
        const formData = new FormData()
        formData.append("student_number", student_number)
        formData.append("feedback_additional_info", assignmentWaiverReply)
        formData.append("outcome", assignmentWaiverOutcomeStatus)
        formData.append("categoryType", categoryType)
        
        const formDataObj = Object.fromEntries(formData.entries());
        axios({
            // Endpoint to send Assignment Waiver Reply for Assignment Waiver Queries
            url: baseUrl + "/convenerfeedback/",
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
    /* CONVENER REPLY TO ASSIGNMENT WAIVERS AND POST METHOD FOR THE REPLY END*/

    /* STRUGGING STUDENTS FUNCTION HANDLING*/
    const StrugglingStudentsButton = (student_number) => {
        return(
            <div>
                <fieldset>
                <h3>Student Number: {student_number}</h3>
                </fieldset>
            </div>
        )
    }
    /* STRUGGING STUDENTS FUNCTION HANDLING END*/

    return (

        /* Parent div 'main-content' is to be shown on the screen
            beneath the header, displaying a sidebar to the left
            and application content to the right of the sidebar
        */
       
        <div className="main-content">
            <div className="sidebar">
                <li> 
                    <button onClick={()=> setIsJoinVulaSiteToggled(!isJoinVulaSiteToggled)} className="queryButton">Join Vula Course</button>
                    <img className="join-icon" src={JoinIcon} alt="query"/>
                </li>
                <li> 
                    <button onClick={()=> setAssignmentExtentionToggled(!isAssignmentExtentionToggled)} className="queryButton">Assignment Extention</button>
                    <img className="extension-icon" src={ExtensionIcon} alt="feedback"/>
                </li>
                <li> 
                    <button onClick={()=> setAssignmentWaiverToggled(!isAssignmentWaiverToggled)} className="queryButton">Assignment Waiver</button>
                    <img className="waiver-icon" src={WaiverIcon} alt="feedback"/>
                </li>
                <li> 
                    <button onClick={()=> seTestConcessionToggled(!isTestConcessionToggled)} className="queryButton">Test Concession</button>
                    <img className="concession-icon" src={ConcessionIcon} alt="feedback"/>
                </li>
                <li>
                    <button onClick={()=> setStrugglingStudentsToggled(!isStrugglingStudentsToggled)} className="queryButton">Struggling Students</button> 
                    <img className="missing-icon" src={StrugglingIcon} alt="feedback"/>
                </li>
            </div>
            <div className="rightside-content">
                <h1 className="header"> Welcome, {props.convenerFinalFirstName} !</h1>
                <p> This is your admin platform for CS2. Select from any of the menu options to view received student queries. </p>
                <br/>
                {
                    (isJoinVulaSiteToggled && 
                        <div className='item-container'>
                            {joinVulaCourseSite.map((joinSite) => {
                                return JoinVulaSiteReplyButton(joinSite.student_number,joinSite.support_doc, joinSite.categoryType);
                            })}
                        </div>
                    )

                    ||


                    (isAssignmentExtentionToggled &&
                        <div className='item-container'>
                            {assignmentExtentions.map((assignmentExtention) => {
                                return AssignmentExtentionReplyButton(assignmentExtention.student_number,assignmentExtention.support_doc, assignmentExtention.assignmentNumber, assignmentExtention.categoryType);
                            })}
                        </div>
                    )

                    ||

                    (isAssignmentWaiverToggled &&
                        <div className="item-container">
                            {assignmentWaivers.map((assignmentWaiver) => {
                                return AssignmentWaiverReplyButton(assignmentWaiver.student_number, assignmentWaiver.support_doc, assignmentWaiver.waiveredAssignmentNumber,assignmentWaiver.categoryType);
                            })}
                        </div>
                    )

                    ||
                    (isStrugglingStudentsToggled &&
                        <div className='item-container'>
                            {strugglingStudents.map((strugglingStudent) => {
                                
                                return StrugglingStudentsButton(strugglingStudent.student_number, strugglingStudent.id);
                            })}
                            {console.log(strugglingStudents)}
                        </div>
                    )

                    ||

                    (isTestConcessionToggled &&
                        <div className='item-container'>
                            {testConcessions.map((testConcession) => {
                                return TestConcessionReplyButton(testConcession.student_number,testConcession.TestNumber,testConcession.support_doc, testConcession.categoryType);
                            })}
                        </div>
                    )

                    


                }
            </div>
        </div>
    )
}