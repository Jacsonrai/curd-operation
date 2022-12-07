import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";

function DarkExample({ userData }) {

  const history = useNavigate();

  const handleDelete = (id) => {
   
    var index = userData
      .map((each) => {
        return each.id;
      })
      .indexOf(id);
      console.log('indexs',index)
    userData.splice(index, 1);
    history("/");
  };
  const handleEdit=(id,firstName,lastName,userName,email)=>{
    localStorage.setItem("firstName",firstName)
    localStorage.setItem("lastName",lastName)
    localStorage.setItem("userName",userName)
    localStorage.setItem("email",email)
    localStorage.setItem("key",id)


  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData &&
          userData.map((each, index) => (
            <tr key={index}>
              <td>{each?.id}</td>
              <td>{each?.firstName}</td>
              <td>{each?.lastName}</td>
              <td>{each?.userName}</td>
              <td>
               <Link to={'/editUser'}>
               <Button onClick={()=>handleEdit(each?.id,each?.firstName,each?.lastName,each?.userName,each?.email)}>
                  Edit
                  </Button>
               </Link>
                
                
                
                &nbsp;
                <Button onClick={() => handleDelete(each?.id)}>Delete</Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default DarkExample;
