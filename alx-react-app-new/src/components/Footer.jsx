import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "15px",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} My Favorite Cities. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
