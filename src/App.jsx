
import React, { useState } from "react";
import LoginPage from "./Components/LoginPage";
import MainPage from "./Components/MainPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username, role) => {
    setIsLoggedIn(true);
    setUser({ username, role });
  };

  return (
        <MainPage user={user} />
     );
};

export default App;
