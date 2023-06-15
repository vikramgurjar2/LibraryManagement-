// import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import HomePage from "./pages/Pages/HomePage"
// import Navbar from "./pages/Navbar";
import SignIn from "./pages/LoginSingup/SignIn.jsx";
import SignUp from "./pages/LoginSingup/SignUp.jsx";

import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [user, setUser] = useState(null);
  const fetchData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/logedinuser/`, { withCredentials: true }
    );
    // console.log(data.user);
    setUser(data.user);
  };

  // console.log(user);
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <Router>
        {/* <Sidebar> */}
        {/* <Navbar user={user} /> */}
        <Routes>
          <Route exact path="/home" element={<HomePage user={user} />} />
          <Route exact path="/signup" element={user ? <Navigate to="/home" /> : <SignUp />} />
          <Route exact path="/signin" element={user ? <Navigate to="/home" /> : <SignIn />} />
        </Routes>
        {/* </Sidebar> */}
      </Router>
    </>
  );
}

export default App;
