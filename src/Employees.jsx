import React, { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";

function Employees() {
  const [employees, setEmployees] = useState();
  var { logout } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:3500/employees", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Login again") {
          logout();
        } else {
          setEmployees([...data]);
        }
      });
  }, []);
  return (
    <div className="border border-2 m-2 p-2 border-success">
      <h1>Employees</h1>
      <ul>
        {employees?.map((emp) => {
          return (
            <li key={emp.id}>
              <b>{emp.firstname}</b>
              <Link
                to={`/editEmployee/${emp.id}`}
                className="btn btn-sm btn-info m-2"
              >
                Edit
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Employees;
