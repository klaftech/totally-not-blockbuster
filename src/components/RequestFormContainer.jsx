import { useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Header'
import RequestForm from './RequestForm';

function RequestFormContainer() {
    
    const [submitted, setSubmitted] = useState(false)

    return (
        <>
            <Header />
            <div style={{padding: "7%"}}>
                <h3>Movie Wishlist Request Form</h3>
                {(submitted) ? <h5>Your submission has been received. <Link to="" onClick={()=>setSubmitted(false)}>Submit another.</Link></h5> :
                    <RequestForm onFormSubmitted={setSubmitted} />
                }
            </div>
        </>
    );
}

export default RequestFormContainer;