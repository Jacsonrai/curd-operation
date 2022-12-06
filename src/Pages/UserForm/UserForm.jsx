import React from 'react'
import Form from 'react-bootstrap/Form';
import { UserDetails } from '../../FakeData/JsonData';
import Button from 'react-bootstrap/esm/Button';


const UserForm = () => {
  return (
    <div>
          <Form >
          <Form.Group className="mb-3" controlId='formBasicid'>
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" placeholder="id" />
      </Form.Group>
      <Form.Group className="mb-3" controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId='formBasicFirstName'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First_Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId='formBasicLastName'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last_Name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
     
    </Form>
    </div>
  )
}

export default UserForm