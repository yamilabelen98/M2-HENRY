import React from "react";

export function validate(user) {
  const error = {};
  if (user.username === "") {
    error.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(user.username)) {
    error.username = "Username is invalid";
  } else if (user.password === "") {
    error.password = "Password is required";
  } else if (!/(?=.*[0,9])/.test(user.password)) {
    error.password = "Password is invalid";
  }
  return error;
}

export default function Form() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  const [error, setError] = React.useState({});
  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    const errores = validate({
      ...user,
      [event.target.name]: event.target.value,
    });
    setError(errores);
  }

  function submit(event) {
    event.preventDeFault();
    setUser({
      username: "",
      password: "",
    });
  }
  function disableTest() {
    return Object.keys();
  }
  return (
    <form onSubmit={submit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          className={error.username && "danger"}
          onChange={handleChange}
          value={user.username}
          name="username"
        ></input>
        {error.username && <p className="danger">{error.username}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          className={error.password && "danger"}
          onChange={handleChange}
          value={user.password}
          name="password"
        ></input>
        {error.password && <p className="danger">{error.password}</p>}
      </div>
      <input type="submit" disabled={disableTest}></input>
    </form>
  );
}
