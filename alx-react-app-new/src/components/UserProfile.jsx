import React from "react";

function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "1.5rem", marginBottom: "10px" }}>
        {props.name}
      </h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p>
        Bio: <span style={{ color: "#555" }}>{props.bio}</span>
      </p>
    </div>
  );
}

export default UserProfile;
