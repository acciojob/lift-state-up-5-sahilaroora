import React, { useState } from "react";

function LoginForm({ handleLogin }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
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
        <h2>User Logged In</h2>
      ) : (
        <LoginForm
          handleLogin={() => setIsLoggedIn(true)}
        />
      )}
    </div>
  );
}

export default App;