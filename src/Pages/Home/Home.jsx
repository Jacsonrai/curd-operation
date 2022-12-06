import React from "react";
import Button from "react-bootstrap/esm/Button";
import DarkExample from "../../Component/Tabel/DarkExample";
import { UserDetails } from "../../FakeData/JsonData";
import{Link} from 'react-router-dom'
const Home = () => {
  return <div>
    <Link to='/createUser'>
    <div style={{margin:"15px"}}>
    <Button>Create</Button>
    </div>
    </Link>
   
    
    <DarkExample userData={UserDetails}/>
  </div>;
};

export default Home;
