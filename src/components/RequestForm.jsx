//bootstrap form theme
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

function RequestForm({ onFormSubmitted }) {

    const baseUrl = "http://localhost:3000/wishlist"
    const formObj = {
        email: "",
        name: "",
        image: "",
        agree: false
    }
    
    const [formData, setFormData] = useState(formObj)
    
    //factory function to generate POST params object
    function PostObj(obj){
        return {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }
    }

    function onChange(event) {
        const key = event.target.name
        let value = event.target.value

        if(event.target.type === "checkbox"){
            value = !formData.agree
        }
        
        const updatedForm = {
            ...formData,
            [key]: value
        }
        
        setFormData(updatedForm)
    }

    function onSubmit(event){
        event.preventDefault()
        fetch(baseUrl,PostObj(formData))
            .then(res => res.json())
            .then(data => onFormSubmitted(true))
        console.log(event)
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={onChange} value={formData.email} name="email" type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                Please enter your email address to get notified when movie is available.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMovieName">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control onChange={onChange} value={formData.name} name="name" type="text" placeholder="Enter Movie Name" />
                {/* <Form.Text className="text-muted">
                Please enter movie name.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMovieImage">
                <Form.Label>Movie Image</Form.Label>
                <Form.Control onChange={onChange} value={formData.image} name="image" type="text" placeholder="Enter Movie Image Link" />
                {/* <Form.Text className="text-muted">
                Please enter link to movie image.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onChange={onChange} name="agree" type="checkbox" label="I agree to the Terms & Conditions of this website." />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default RequestForm;
