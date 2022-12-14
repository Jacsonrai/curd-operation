import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { UserDetails } from "../../FakeData/JsonData";
import { v4 as uuid} from 'uuid';
import Button from "react-bootstrap/esm/Button";

import { useNavigate } from "react-router-dom";
const UserForm = () => {
  
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();

  const history = useNavigate();
  const handleSubmit = () => {
    let id=uuid()
    UserDetails.push({
      id: id,
      email: email,
      firstName: firstName,
      lastName: lastName,
      userName:userName
    });
    history("/");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First_Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last_Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Last_Name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
