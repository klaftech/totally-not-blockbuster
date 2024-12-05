import { useState } from 'react';
import { Link } from "react-router-dom";
import RequestForm from './RequestForm';
import ToastPopup from './ToastPopup';

function RequestFormContainer() {
    
    const [submitted, setSubmitted] = useState(false)

    return (
        <div style={{padding: "7%"}}>
            {(submitted) ? <ToastPopup subject="Form Submitted" message="Your wishlist submission has been received" /> : ""}
            <h3 style={{textAlign :"center"}}>Movie Wishlist Request Form</h3>            
            {(submitted) ? <h5>Your submission has been received. <Link to="" onClick={()=>setSubmitted(false)}>Submit another.</Link></h5> :
                <RequestForm onFormSubmitted={setSubmitted} />
            }
        </div>
    );
}

export default RequestFormContainer;