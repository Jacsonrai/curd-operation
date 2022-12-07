import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { UserDetails } from "../../FakeData/JsonData";
import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/esm/Button";

import { Link, useNavigate } from "react-router-dom";

const EditForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [id, setId] = useState("");
  const[indexs,setIndex]=useState("")

  const history = useNavigate();
  console.log('indexs',indexs)
  console.log('userData',UserDetails[indexs])
  useEffect(()=>{
    UserDetails?.map((each)=>{
       if(each?.id==id){
        setIndex(id-1)
       }
    })
  },[id])
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let a=UserDetails[indexs]
    a.email=email
    a.firstName=firstName
    a.lastName=lastName
    a.userName=userName
    a.id=id
    
    

    history("/");
  };
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setId(localStorage.getItem("key"));
    setUserName(localStorage.getItem("userName"));
  }, []);
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First_Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last_Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="user_Name"
          />
        </Form.Group>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditForm;
