import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";

const ReadUsers = () => {
  const getAllUsersEndpoint = "http://localhost:4000/v1/user/all";
  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    //const res = await fetch(`${getAllUsersUrl}`);
    //console.log(res.json());
    const res = await axios.get(`${getAllUsersEndpoint}`);

    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <h3 className="text-center mb-3">Users</h3>
      {users &&
        Object.values(users).map((user) => (
          <Row className="Justify-content-center" key={user.id || user.email}>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                  
                  {user.city && user.country && (
                    <p>{user.city} - {user.country}</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default ReadUsers;
