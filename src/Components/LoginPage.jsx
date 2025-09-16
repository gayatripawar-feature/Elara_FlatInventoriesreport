
import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded users
  const users = [
    { username: "admin", password: "admin123", role: "Admin" },
    { username: "manager", password: "manager123", role: "Manager" },
    { username: "employee", password: "employee123", role: "Employee" },
  ];

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const foundUser = users.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (foundUser) {
//       onLogin(foundUser.username, foundUser.role);
//     } else {
//       alert("Invalid username or password!");
//     }
//   };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      onLogin(data.username, data.role);
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
    alert("Server error!");
  }
};

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
