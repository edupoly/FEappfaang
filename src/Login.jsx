import React, { useContext } from "react";
import { useFormik } from "formik";
import UserContext from "./UserContext";
function Login() {
  var { login } = useContext(UserContext);
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      fetch("http://localhost:3500/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.msg === "ok") {
            window.localStorage.setItem("token", data.token);
            login();
          } else {
            console.log("Login Failed");
          }
        });
    },
  });
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginForm.handleSubmit}>
        <input type="text" {...loginForm.getFieldProps("username")} />
        <br />
        <input type="text" {...loginForm.getFieldProps("password")} />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
