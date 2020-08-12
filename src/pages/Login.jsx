import React from "react";

function Login() {
  function handleSubmit(e) {
    e.preventDefault();

    console.log("Logging in...");
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>{" "}
        <input type="text" name="email" placeholder="your email address..." />
        <br />
        <label htmlFor="password">Password</label>{" "}
        <input
          type="password"
          name="password"
          placeholder="your password...   "
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
