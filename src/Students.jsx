import React, { useEffect, useState } from "react";

function Students() {
  var [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3500/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents([...data]);
      });
  }, []);
  return (
    <div className="border border-2 m-2 p-2 border-danger">
      <h1>Students</h1>
      <ul>
        {students?.map((std) => {
          return (
            <li key={std._id}>
              <b>{std.name}</b>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Students;
