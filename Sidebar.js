import React from "react"
import "../css/Sidebar.css"
import QueryIcon from "../images/query.png"
import FeedbackIcon from "../images/message-line.png"
import PercentageIcon from "../images/percent.png"
import axios from "axios"


export default function Sidebar(props) {
    const apiUrl = 'http://127.0.0.1:8000/api'

    /* ***********************  Join Vula Course Site Form Entry Details *****************************/
        const[isJoinSiteToggled, setIsJoinSiteToggled] = React.useState(false)  /* Join Course Site Button */

         /* JOIN COURSE VULA SITE ATTACHMENT */
        const[joinSiteSelectedFile, setJoinSiteSelectedFile] = React.useState()
        const[isJoinSiteFileSelected, setIsJoinSiteFileSelected] = React.useState(false)

        function handleJoinSiteFileUpload(event) {
            setJoinSiteSelectedFile(event.target.files[0])
            setIsJoinSiteFileSelected(true)
        }

        /* STUDENT NUMBER */
        const[courseSiteStudentNum, setCourseSiteStudentNum] = React.useState("")   /* Join Course Site Student Number State */

        function handleCourseSiteStudentNum(event) {
            event.preventDefault()
            setCourseSiteStudentNum(event.target.value)
        }
        function handleJoinSiteSubmit(event) {    /* Join Course Site Form Submit */
            event.preventDefault();
            const formData = new FormData()
            formData.append("student_number", courseSiteStudentNum)
            formData.append("support_doc", joinSiteSelectedFile)
            formData.append("categoryType", "Join Vula Course Site") 

            //when submitting file, no need to change it to formDataObject
            axios({
                // Endpoint to send join vula course query
                url: apiUrl + "/joinvulacourses/",
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
                alert(`Query succesfully submitted. Submitted by: ${courseSiteStudentNum} `)
        }
    
    /* ********************** Join Vula Course Site Form Entry Details END **************************** */ 


    /* ********************* ASSIGNMENT EXTENSION FORM ENTRY DETAILS ************************************/

    function handleExtensionSubmit(event) {    /* Test Concession Form Submit */
       
        event.preventDefault()

        //POST method for submitting the Assignment EXtention Query
        const formData = new FormData()
        formData.append("student_number", extensionStudentNum)
        formData.append("support_doc", assignmentExtSelectedFile)
        formData.append("assignmentNumber", extensionAssignmentNum)
        formData.append("categoryType", "Assignment Extention") 

        //when submitting file, no need to change it to formDataObject
        axios({
            // Endpoint to send assignment extention query
            url: apiUrl + "/assignmentextentions/",
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
            alert(`Query succesfully submitted. Submitted by: ${extensionStudentNum} `)
    }

    const[isExtensionToggled, setIsExtensionToggled] = React.useState(false)    /* Assignment Extension Button */


    
    /* STUDENT NUMBER */
    const[extensionStudentNum, setExtensionStudentNum] = React.useState("")   /* Assignment Extension Student Number State */

    function handleExtensionStudentNum(event) {   /* Assignment Extension Student Number State Listener*/
        event.preventDefault()
        setExtensionStudentNum(event.target.value)
    }


    /* ASSIGNMENT NUMBER */
    const[extensionAssignmentNum, setExtensionAssignmentNum] = React.useState("")   /* Assignment Extension Number State */


    function handleExtensionAssignmentNum(event) {  /* Assignment Extension Number State Listener */
        event.preventDefault()
        setExtensionAssignmentNum(event.target.value)
    }

    const[assignmentExtSelectedFile, setAssignmentExtSelectedFile] = React.useState()
    const[isAssignmentExtFileSelected, setAssignmentExtFileSelected] = React.useState(false)

    function handleExtensionFileUpload(event) { /* Assignment Extension File Upload Change */
        event.preventDefault()
        setAssignmentExtSelectedFile(event.target.files[0])
        setAssignmentExtFileSelected(true)
    }


    /* **************** ASSIGNMENT EXTENSION FORM ENTRY DETAILS END ***************************** /




      /* *********************** MISSING MARK FORM ENTRY *****************************************/

    const[isMissingMarkToggled, setIsMissingMarkToggled] = React.useState(false)    /* Missing Mark Button */

    /* STUDENT NUMBER */
    const[missingMarkStudentNum, setMissingMarkStudentNum] = React.useState(false) /* Missing Mark Student Number State */

    function handleMissingMarkStudentNum(event) {   /* Missing Mark Student Number Listener */
        event.preventDefault()
        setMissingMarkStudentNum(event.target.value)
    }

    /* MISSING MARK ASSESSMENT DESCRIPTION */
    const[missingAssessment, setMissingAssessment] = React.useState("") /* Missing Assessment */

    function handleMissingAssessment(event) {   /* Missing Assessment Listener */
        event.preventDefault()
        setMissingAssessment(event.target.value)
    }

    function handleMissingMarkSubmit(event) {   /* Missing Mark Fom Submit Button */
        event.preventDefault()
        const formData = new FormData();
        formData.append("student_number", missingMarkStudentNum)
        formData.append("missingAssessmentNumber", missingAssessment) 
        formData.append("categoryType", "Missing Mark")

        const formDataObj = Object.fromEntries(formData.entries());
        axios({
            // Endpoint to send missing mark query
            url: apiUrl + "/missingmarks/",
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

            alert(`Query succesfully submitted. Submitted by: ${missingMarkStudentNum} `)    
    }

    /* *************************** MISSING MARK FORM ENTRY END ************************************/



    /* ************************* ASSIGNMENT WAIVER FORM ENTRY DETAILS *****************************/

    function handleWaiverSubmit(event) {    /* Assignment Waiver Form Submit */
        event.preventDefault()

        //POST method for submitting the Assignment Waiver Query
        const formData = new FormData()
        formData.append("student_number", waiverStudentNum)
        formData.append("support_doc", assignmentWaiverSelectedFile)
        formData.append("waiveredAssignmentNumber", waiverAssignmentNum) 
        formData.append("categoryType", "Assignment Waiver")

        //when submitting file, no need to change it to formDataObject
        axios({
            // Endpoint to send Assignment Waiver query
            url: apiUrl + "/assignmentwaivers/",
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
            alert(`Query succesfully submitted. Submitted by: ${waiverStudentNum} `)
    }

    const[isWaiverToggled, setIsWaiverToggled] = React.useState(false)

    
    /* Assignment Waiver File Upload Change */
    const [assignmentWaiverSelectedFile, setAssignmentWaiverSelectedFile] = React.useState()
    const [isAssignmentWaiverFileSelected, setAssignmentWaiverFileSelected] = React.useState(false)
    
    function handleWaiverFileUploadChange(event) { /* Assignment Extension File Upload Change */
        event.preventDefault()
        setAssignmentWaiverSelectedFile(event.target.files[0])
        setAssignmentWaiverFileSelected(true)
    }

    /* STUDENT NUMBER */
    const[waiverStudentNum, setWaiverStudentNum] = React.useState("")

    function handleWaiverStudentNum(event) {
        event.preventDefault()
        setWaiverStudentNum(event.target.value)
    }

    /* ASSIGNMENT NUMBER */
    const[waiverAssignmentNum, setWaiverAssignmentNum] = React.useState("")

    function handleWaiverAssignmentNum(event) {
        event.preventDefault()
        setWaiverAssignmentNum(event.target.value)
    }

    /* *********************** ASSIGNMENT WAIVER FORM ENTRY END ********************* */



    /* ********************* Test Concession Form Entry Details ***********************************/

    function handleTestConcessionSubmit(event) {    /* Test Concession Form Submit */
        event.preventDefault()

        //POST method for submitting the Test Concession Query
        const formData = new FormData()
        formData.append("student_number", testStudentNum)
        formData.append("support_doc", testConcessionSelectedFile)
        formData.append("TestNumber", testNum) 
        formData.append("categoryType", "Test Concession")

        //when submitting file, no need to change it to formDataObject
        axios({
            // Endpoint to send Test Concession query
            url: apiUrl + "/testconcessions/",
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
            alert(`Query succesfully submitted. Submitted by: ${testStudentNum} `)
    }

    const[isTestConcessionToggled, setIsTestConcessionToggled] = React.useState(false)  /* Test Concession Button */

    /* Test Concession File Upload Change */
    const [testConcessionSelectedFile, setTestConcessinSelectedFile] = React.useState()
    const [isTestConcessionFileSelected, setTestConcessionFileSelected] = React.useState(false)

    function handleTestConcessionFileUploadChange(event) {  
        event.preventDefault()
        setTestConcessinSelectedFile(event.target.files[0])
        isTestConcessionFileSelected(true)
    }



        /* STUDENT NUMBER */
    const[testStudentNum, setTestStudentNum] = React.useState("")   /* Test Concession Student Number State */

    function handleTestStudentNum(event) {   /* Test Concession Student Number State Listener*/
        event.preventDefault()
        setTestStudentNum(event.target.value)
    }


    /* CONCESSION TEST NUMBER */
    const[testNum, setTestNum] = React.useState("")   /* Test Concession Number State */

    function handleTestNum(event) {   /* Test Concession Number State Listener */
        event.preventDefault()
        setTestNum(event.target.value)
    }

    /* ************************** Test Concession Form Entry Details END ******************************** */ 

    


    /* ********************* Mark Dispute Form Entry Details ***********************************/
    const[isMarkDisputeToggled, setIsMarkDisputeToggled] = React.useState(false)  /* Mark Dispute Button */

    /* STUDENT NUMBER */
    const[markDisputeStudentNum, setMarkDisputeStudentNum] = React.useState("") /* Mark Dispute Student Number State */

    function handleMarkDisputeStudentNum(event) {   /* Mark Dispute Student Number Listener */
        event.preventDefault()
        setMarkDisputeStudentNum(event.target.value)
    }

    /* MISSING MARK ASSESSMENT DESCRIPTION */
    const[markDisputeAssessment, setMarkDisputeAssessment] = React.useState("") /* Mark Dispute Assessment */

    function handleMarkDisputeAssessment(event) {   /*  Mark Dispute Assessment Listener */
        event.preventDefault()
        setMarkDisputeAssessment(event.target.value)
    }

    function handleMarkDisputeSubmit(event) {   /* Mark Dispute Form Submit Button */
        event.preventDefault()
        const formData = new FormData();
        formData.append("student_number", markDisputeStudentNum)
        formData.append("assessment_number", markDisputeAssessment) 
        formData.append("categoryType", "Mark Dispute")

        const formDataObj = Object.fromEntries(formData.entries());
        axios({
            // Endpoint to send mark dispute query
            url: apiUrl + "/markdisputes/",
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

        alert(`Query succesfully submitted. Submitted by: ${markDisputeStudentNum} `)
    }

    /* ********************* Mark Dispute Form Entry Details  END ***********************************/


    /* STUDENT DP STATUS CHECK */
    let aStudentsDPStatus = false
    const[neededScoringAvgForDP,setNeededScoringAvgForDP] = React.useState(null)
    const[onTrackAssignmentAverage, setOnTrackAssignmentAverage] = React.useState(null)
   
    const[studentAssignmentMarks, setStudentAssignmentMarks] = React.useState([])
    try {
        React.useEffect(() => {
            axios.get(apiUrl+'/assignments').then((response) => {
                setStudentAssignmentMarks(response.data)
            });
        },[]);
    }
    catch(error){
        console.log(console.error())
    }
    
    let isCheckDPStatusToggled = false
    function handleCheckDPStatus(event) {
        isCheckDPStatusToggled = true
        studentAssignmentMarks.map(aStudentsAssignmentMarks => {
            if(aStudentsAssignmentMarks.student_number === props.studentFinalStudentNumber) {
                let theStudentsAvg = 0
                let totalMarksGathered  = 0
                let marksShortOf = 0
                let neededAverageToScore = 0

                theStudentsAvg = (aStudentsAssignmentMarks.assignment_one + aStudentsAssignmentMarks.assignment_two + aStudentsAssignmentMarks.assignment_three)/3
                if(theStudentsAvg < 45) {
                    aStudentsDPStatus = false
                    totalMarksGathered = (aStudentsAssignmentMarks.assignment_one + aStudentsAssignmentMarks.assignment_two + aStudentsAssignmentMarks.assignment_three)
                    marksShortOf = 270 - totalMarksGathered
                    neededAverageToScore = marksShortOf/3
                    setNeededScoringAvgForDP(Math.round(neededAverageToScore))
                }
                else {
                    aStudentsDPStatus = true
                    setOnTrackAssignmentAverage(Math.round(theStudentsAvg))
                }
            }
        })
    }


   
    const [isQueryToggled, setIsQueryToggled] = React.useState(true);
    const [isFeedbackToggled, setIsFeedbackToggled] = React.useState(false);

    /* GETTING FEEDBACK FROM COURSE CONVENER AND TEACHING ASSISTANT START*/
    const [convenerFeedback, setConvenerFeedback] = React.useState([])
    const [teachingAssistantFeedback, setTeachingAssistantFeedback] = React.useState([])
    try {
        React.useEffect(() => {
            axios.get(apiUrl+'/convenerfeedback').then((response) => {
               setConvenerFeedback(response.data.filter( i => i.student_number.toLowerCase() === props.studentFinalStudentNumber.toLowerCase()))
            });
        },[]);
    }
    catch(error){
        console.log(console.error())
    }

    try {
        React.useEffect(() => {
            axios.get(apiUrl+'/teachingassistantfeedback').then((response) => {
                setTeachingAssistantFeedback(response.data.filter(i => i.student_number.toLowerCase() === props.studentFinalStudentNumber.toLowerCase()))
            });
        },[]);
    }
    catch(error){
        console.log(console.error())
    }
    // if(convenerFeedback.length === 0){
    //     return(
    //         <div>
    //             <p>You have zero new notifications</p>
    //         </div>
    //     )
    // }
    
    const ConvenerFeedbackButton = (student_number,outcome,additional_info, categoryType) => {
        return(            
            <div>
                { 
                    convenerFeedback.length > 0 && 
                        <fieldset>
                        <p>Student Number: {student_number}</p>
                        <p>Outcome: {outcome}</p>
                        <p>Additional Information: {additional_info}</p>
                        <p>Category Type: {categoryType}</p>
                    </fieldset>
                }

                {/* {convenerFeedback.length > 0 && <p>You have {convenerFeedback.length} feedback awaiting for you.</p>} */}
                

            </div>
        )
    }

    const TAFeedbackButton = (student_number, teaching_assistant_feedback,categoryType) => {
        return(
            <div>
                <fieldset>
                    <p>Student Number: {student_number}</p>
                    <p>Teaching Assistant Feedback: {teaching_assistant_feedback}</p>
                    <p>Category Type: {categoryType}</p>
                </fieldset>
            </div>
        )
    }
    /* GETTING FEEDBACK FROM COURSE CONVENER AND TEACHING ASSISTANT END*/
    
    return (

        /* Parent div 'main-content' is to be shown on the screen
            beneath the header, displaying a sidebar to the left
            and application content to the right of the sidebar
        */
        <div className="main-content">
            <div className="sidebar">  
                <li> 
                    <button onClick={()=> setIsQueryToggled(!isQueryToggled)} className="queryButton">Query </button>
                    <img className="query-icon" src={QueryIcon} alt="query"/>
                </li>
                <li> 
                    <button onClick={()=> setIsFeedbackToggled(!isFeedbackToggled)} className="queryButton">Feedback</button>
                    <img className="feedback-icon" src={FeedbackIcon} alt="feedback"/>
                </li>
                <li> 
                    <button onClick={handleCheckDPStatus} className="queryButton">DP Status Check</button>
                    <img className="feedback-icon" src={PercentageIcon} alt="feedback"/>
                </li>
            </div>
            <div className="rightside-content">
                <h1 className="header"> Welcome, {props.studentFinalFirstName}!</h1>
                <p> This is your admin platform for CS2, please select from the options below which query you wish to make.</p>
                <br/>
                {(isQueryToggled && 
                    <div className="options-container">
                    <button onClick={() => setIsJoinSiteToggled(!isJoinSiteToggled)}> Join Vula Course Site</button>
                    <button onClick={()=> setIsExtensionToggled(!isExtensionToggled)}> Assignment Extension </button>
                    <button onClick={() => setIsWaiverToggled(!isWaiverToggled)}> Assignment Waiver </button>
                    <button onClick={() => setIsTestConcessionToggled(!isTestConcessionToggled)}> Test Concession </button>
                    <button onClick={() => setIsMarkDisputeToggled(!isMarkDisputeToggled)}> Mark Dispute </button>
                    <button onClick={() => setIsMissingMarkToggled(!isMissingMarkToggled)}> Missing Mark</button>
                </div>
                )

                ||

                (isFeedbackToggled &&
                    <div className='item-container'>
                            {convenerFeedback.map((feedback) => { 
                                {convenerFeedback.length === null && <p>You currently do not have any awaiting feedback.</p>}
                                return ConvenerFeedbackButton(feedback.student_number,feedback.outcome, feedback.feedback_additional_info, feedback.categoryType);
                            })}

                            {teachingAssistantFeedback.map(feedback => {
                                return TAFeedbackButton(feedback.student_number, feedback.teaching_assistant_feedback,feedback.categoryType)
                            })}
                    </div>
                )

                ||

                (
                    isCheckDPStatusToggled && 
                        
                         (aStudentsDPStatus && 
                            <div> 
                                <h3> Your Current DP Status Standing </h3>
                                <p> You are currently on track for obtaining DP. Your current assignment average is {onTrackAssignmentAverage}%</p>)
                            </div>
                          
                        
                         )

                        ||
                        
                        ((!aStudentsDPStatus) && 
                            <div> 
                                 <h3> Your Current DP Status Standing </h3>
                                 <p> You need to average at least {neededScoringAvgForDP}% in each of the remaining assignment to obtain DP.</p>
                                 
                            </div>
                      
    
                        )
                    )
                }          
        
                {
                    (isWaiverToggled && 
                    <div className="waiver-form-container">
                        <form className="waiver-form" onSubmit={handleWaiverSubmit}>
                            <div className="student-number-div">
                                <label className="student-number-label"> Student Number</label>
                                <input
                                    name="waiverStudentNum"
                                    onChange={handleWaiverStudentNum}
                                    placeholder="eg ABCXYZ001"
                                    type="text"
                                    value={waiverStudentNum}
                                />
                            </div>

                            <br/>

                            <div className="waiver-div">
                                        <label className="waiver-label"> Enter the assignment number.</label>
                                        <input 
                                            name="waiverAssignmentNum"
                                            onChange={handleWaiverAssignmentNum}
                                            placeholder="eg 2"
                                            type="text"
                                            className=""
                                            value={waiverAssignmentNum}
                                        />
                            </div>

                            <br/>

                            <div className="waiver-document-div">
                                    <label className="waiver-document-label"> Attach supporting document (eg Medical Certificate)</label>
                                    <input
                                        onChange={handleWaiverFileUploadChange}
                                        type="file"
                                        name="waiver-file" 
                                        required
                                    />
                            </div>

                            <br/>

                            <button className="waiver-submit">Submit</button>
                        </form>
                    </div>)
                
                        ||

                
                   ( isMissingMarkToggled && 
                    <div className="missing-mark-form-container">
                        <form className="missing-form" onSubmit={handleMissingMarkSubmit}>
                            <div className="student-number-div">
                                <label className="student-number-label"> Student Number</label>
                                <input
                                    name="missingMarkStudentNum"
                                    onChange={handleMissingMarkStudentNum}
                                    placeholder="eg ABCXYZ001"
                                    type="text"
                                    value={missingMarkStudentNum}
                                />
                            </div>

                            <br/>

                            <div className="missing-assessment-mark-div">
                                    <label className="missing-mark-label"> Enter the assessment.</label>
                                    <input 
                                        name="missingMarkAssessment"
                                        onChange={handleMissingAssessment}
                                        placeholder="eg Test 1"
                                        type="text"
                                        className=""
                                        value={missingAssessment}
                                    />
                            </div>

                            <br/>

                            <button className="missing-mark-submit">Submit</button>
                        </form>
                    </div>)
                          
                    ||
                
                    ( isMarkDisputeToggled && 
                     <div className="mark-dispute-form-container">
                         <form className="mark-dispute-form" onSubmit={handleMarkDisputeSubmit}>
                             <div className="student-number-div">
                                 <label className="student-number-label"> Student Number</label>
                                 <input
                                     name="markDisputeStudentNum"
                                     onChange={handleMarkDisputeStudentNum}
                                     placeholder="eg ABCXYZ001"
                                     type="text"
                                     value={markDisputeStudentNum}
                                 />
                             </div>
 
                             <br/>
 
                             <div className="mark-dispute-assessment-div">
                                     <label className="mark-dispute-label"> Enter the assessment.</label>
                                     <input 
                                         name="markDisputeAssessment"
                                         onChange={handleMarkDisputeAssessment}
                                         placeholder="eg Test 1 or Assignment 1"
                                         type="text"
                                         className=""
                                         value={markDisputeAssessment}
                                     />
                             </div>
 
                             <br/>
 
                             <button className="mark-dispute-submit">Submit</button>
                         </form>
                     </div>)
                           
                     ||
 

                (
                    isExtensionToggled && 
                    <div className="extension-form-container">
                        <form className="extension-form" onSubmit={handleExtensionSubmit}>
                            <div className="student-number-div">
                                <label className="student-number-label"> Student Number</label>
                                <input
                                    name="extensionStudentNum"
                                    onChange={handleExtensionStudentNum}
                                    placeholder="eg ABCXYZ001"
                                    type="text"
                                    value={extensionStudentNum}
                                />
                            </div>

                            <br/>

                            <div className="extension-number-div">
                                    <label className="extension-number-label">Assignment Number</label>
                                    <input 
                                        name="extensionNumber"
                                        onChange={handleExtensionAssignmentNum}
                                        placeholder="eg 1"
                                        type="text"
                                        className=""
                                        value={extensionAssignmentNum}
                                    />
                            </div>

                            <br/>

                            <div className="extension-document-div">
                                <label className="extension-document-label"> Attach supporting document (eg Medical Certificate)</label>
                                <input
                                    onChange={handleExtensionFileUpload}
                                    type="file"
                                    required
                                    name="extension-file" 
                                />
                            </div>

                            <br/>

                            <button className="extension-submit"> Submit </button>
                        </form>
                    </div>)
                
                    ||

                
                    (isJoinSiteToggled &&
                    <div className="site-form-container">
                        <form className="site-form" onSubmit={handleJoinSiteSubmit}>
                            <div className="student-number-div">
                                <label className="student-number-label"> Student Number</label>
                                <input
                                    name="joinSiteStudentNum"
                                    onChange={handleCourseSiteStudentNum}
                                    placeholder="eg ABCXYZ001"
                                    type="text"
                                    value={courseSiteStudentNum}
                                />
                            </div>

                            <br/>

                            <div className="site-document-div">
                                <label className="site-document-label"> Attach supporting document (eg Letter from faculty)</label>
                                <input
                                    onChange={handleJoinSiteFileUpload}
                                    type="file"
                                    required
                                    name="site-file" 
                                />
                            </div>

                            <br/>

                            <button className="join-site-submit" type="submit">Submit </button>

                        </form>

                    </div>)
                
                    ||
                
                 (isTestConcessionToggled &&    
                    <div className="test-form-container">
                            <form className="test-form" onSubmit={handleTestConcessionSubmit}>
                                <div className="student-number-div">
                                    <label className="student-number-label">Student Number</label>
                                    <input 
                                        name="testStudentNum"
                                        onChange={handleTestStudentNum}
                                        placeholder="eg ABCXYZ001"
                                        type="text"
                                        className=""
                                        value={testStudentNum}
                                    />
                                </div>

                                <br/>

                                <div className="test-number-div">
                                    <label className="test-number-label">Test Number</label>
                                    <input 
                                        name="test-number"
                                        onChange={handleTestNum}
                                        placeholder="eg 1"
                                        type="text"
                                        className=""
                                        value={testNum}
                                    />
                                </div>

                                <br/>

                                <div className="test-document-div">
                                    <label className="test-document-label"> Attach supporting document (eg Medical Certificate) </label>
                                    <input 
                                        type="file"
                                        name="test-file"
                                        required
                                        onChange={ handleTestConcessionFileUploadChange}
                                    />
                                </div>

                                <br/>

                                <button className="test-concession-submit"> Submit </button>

                            </form>
                        </div>)

                    }
            </div>
        </div>
      
    )
}

