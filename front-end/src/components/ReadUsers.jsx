import { useEffect, useState } from 'react';
import axios from "axios";
import { Card, Row, Col } from 'react-bootstrap';


const ReadUsers = () => {
    const getAllUsersUrl = 'http://localhost:4000/v1/user/all';
    const [users, setUsers] = useState({});

    const fetchUsers = async () => {
        //const res = await fetch(`${getAllUsersUrl}`);
        //console.log(res.json());
        const res = await axios.get(`${getAllUsersUrl}`);

        setUsers(res.data);
    }


    useEffect(() => {
        fetchUsers();
    }, []);


    const renderedUsers = users && Object.values(users).map( (user) => {
        return (
            <>
                <Row className='Justify-content-center'>
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
            </>
        );
    });

    return (
        <>
            <h3 className='text-center'>Users</h3>
            <Row className='d-flex flex-row flex-wrap justify-content-between'>
                {renderedUsers}
            </Row>
        </>
    );
}

export default ReadUsers;