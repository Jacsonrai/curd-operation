import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import UserForm from "./Pages/UserForm/UserForm";
import EditForm from "./Pages/EditForm/EditForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createUser" element={<UserForm/>} />
          <Route path="/editUser" element={<EditForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
