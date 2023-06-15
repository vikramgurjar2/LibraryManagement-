import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import HomePage from "./pages/Pages/HomePage"
import SignIn from "./pages/LoginSingup/SignIn.jsx";
import SignUp from "./pages/LoginSingup/SignUp.jsx";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./pages/Components/Navbar";
import LandingPage from "./pages/Pages/LandingPage";


function App() {

  let [user, setUser] = useState(null);
  const fetchData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/logedinuser/`, { withCredentials: true }
    );
    setUser(data.user);
  };

  useEffect(() => {
    fetchData();
  }, [])

  // user = false;


  return (
    <>
      <Router>
        {/* <Sidebar> */}
        {user && <Navbar user={user} />}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={user ? <Navigate to="/home" /> : <SignIn />} />
          <Route exact path="/signup" element={user ? <Navigate to="/home" /> : <SignUp />} />
          <Route exact path="/signin" element={user ? <Navigate to="/home" /> : <SignIn />} />
        </Routes>
        {/* </Sidebar> */}
      </Router>
    </>
  );
}

export default App;
