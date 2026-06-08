import React from "react";

function LoginForm({ handleLogin }) {
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;