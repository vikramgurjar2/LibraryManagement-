import React from "react";

const Profile = ({ user }) => {
  return <div style={{ paddingBlockStart: "4rem" }}>{user.username}</div>;
};

export default Profile;
