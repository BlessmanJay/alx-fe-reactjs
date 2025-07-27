// UserProfile.jsx
import React,  { useContent } from "react";
import UserContext from '../UserContext';

function UserProfile(props) {
  const userData = useContext(UserContext);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
