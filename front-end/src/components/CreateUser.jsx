import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";



const CreateUser = () => {
    
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

            if (res.data?.status === 'OK') {
                setName('');
                setEmail('');
                setCity('');
                setCountry('');
            } else {
                res.data = {};
            }
        } catch (err) {
            console.log(err);
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
        </Container>
    </>);
};



export default CreateUser;