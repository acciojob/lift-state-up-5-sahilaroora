import React, { useState } from "react";

function LoginForm({ isLoggedIn, handleLogin }) {
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
        <p>You are logged in!</p>       
      ) : (
        <LoginForm
          isLoggedIn={isLoggedIn}       {/* ✅ pass state down to child */}
          handleLogin={() => setIsLoggedIn(true)}
        />
      )}
    </div>
  );
}

export default App;