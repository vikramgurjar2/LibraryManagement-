import React from "react";
import Banner from "./Banner";
import "../../Assets/css/home.css";
import Lists from "./Lists";
const HomePage = ({ user }) => {
  return (
    <div className="home-top" style={{ paddingTop: "4rem" }}>
      <div className="home-inner-top">
        <Banner />
        <Lists user={user} />
      </div>
    </div>
  );
};

export default HomePage;
