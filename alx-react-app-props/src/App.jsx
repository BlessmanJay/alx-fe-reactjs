// App.jsx
import React from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserContext from "./components/Usercontext";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
   <UserContext.Provider value={userData}>
     <ProfilePage/>
     </UserContext.Provider>
  );
}

export default App;
