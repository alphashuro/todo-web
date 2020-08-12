import React from "react";

function Signup() {
  function handleSubmit(e) {
    e.preventDefault();

    console.log("Signing up...");
  }

  return (
    <div>
      <h1>Sign up</h1>
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
        <input
          type="password"
          name="password_confirm"
          placeholder="confirm password...   "
        />
        <br />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
