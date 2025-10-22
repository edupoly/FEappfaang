import React, { useEffect, useState, useContext } from "react";
import UserContext from "./UserContext";

function Students() {
  var [students, setStudents] = useState([]);
  var { logout } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:3500/students", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Login again") {
          logout();
        } else {
          ``;
          setStudents([...data]);
        }
      });
  }, []);
  function deleteStudent(id) {
    fetch(`http://localhost:3500/deleteStudent/${id}`, {
      method: "DELETE",
    });
  }
  return (
    <div className="border border-2 m-2 p-2 border-danger">
      <h1>Students</h1>
      <ul>
        {students?.map((std) => {
          return (
            <li key={std._id}>
              <b>{std.name}</b>
              <button
                onClick={() => {
                  deleteStudent(std._id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Students;
