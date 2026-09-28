import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === "" || password === "") {
      alert("Please enter username and password");
      return;
    }

    if (username === "admin" && password === "1234") {
      const userData = {
        userId: 101,
        role: "Admin"
      };

      const simulatedToken = btoa(JSON.stringify(userData));

      localStorage.setItem("token", simulatedToken);

      setToken(simulatedToken);
      setUser(userData);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setUsername("");
    setPassword("");
  };

  if (token) {
    return (
      <div className="container">
        <div className="card">
          <h1>JWT Authentication</h1>

          <h2>Protected Dashboard</h2>

          <p className="success">✓ Login Successful</p>

          <div className="user-info">
            <p>
              <strong>User ID:</strong> {user ? user.userId : 101}
            </p>

            <p>
              <strong>Role:</strong> {user ? user.role : "Admin"}
            </p>

            <p>
              <strong>Authentication:</strong> Authenticated
            </p>
          </div>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>JWT Authentication</h1>

        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <br />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>

        <br />
        <br />

        <button onClick={handleLogin}>Login</button>

        <p>
          <strong>Test Credentials</strong>
        </p>

        <p>Username: admin</p>
        <p>Password: 1234</p>
      </div>
    </div>
  );
}

export default App;
