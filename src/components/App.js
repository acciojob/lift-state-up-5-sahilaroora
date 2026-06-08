import React, { useState } from "react";

function LoginForm({ handleLogin }) {
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" />
      <input type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Parent Component</h1>

      {isLoggedIn ? (
        <h2>Logged In</h2>
      ) : (
        <LoginForm handleLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;