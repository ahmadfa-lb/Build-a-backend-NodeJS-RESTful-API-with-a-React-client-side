import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



const CreateUser = () => {
    
    function capitalizeFirstLetter(word) {
        if (!word) return '';
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    const createUserEndpoint = "http://localhost:4000/v1/user/";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const submitForm = async(event) => {
        event.preventDefault();

        const payLoad = {
            name,
            email,
            city,
            country,
        };

        try {
            const res = await axios.post(`${createUserEndpoint}`, payLoad);

            if (res.data?.status) {
                toast.success(' User has been successfully created!');

                //clearing the states 
                setName('');
                setEmail('');
                setCity('');
                setCountry('');
            } else {
                toast.warn('An error has occured');
            }
        } catch (err) {
            const getErrorMessage = () => {
                const {
                    data: {
                        errors:{ body }, 
                    }} = err.response;
                
                toast.error(capitalizeFirstLetter(body[0]?.message));
            };
            
            return (getErrorMessage());
            
        }
    };

    
    
    
    return (
    <>
        <Container className="mb-5">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Name"
                                onChange={(nameField) => setName(nameField.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="Email"
                                onChange={(emailField) => setEmail(emailField.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="City"
                                onChange={(cityField) => setCity(cityField.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contry</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Country"
                                onChange={(countryField) => setCountry(countryField.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={submitForm}>Add User</Button>
                    </Form>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    </>);
};



export default CreateUser;