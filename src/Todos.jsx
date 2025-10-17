import React, { useEffect } from "react";

function Todos() {
  useEffect(() => {
    fetch("http://localhost:3500/todos/allTodos").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="border border-2 m-2 p-2 border-danger">
      <h2>Todos</h2>
    </div>
  );
}

export default Todos;
