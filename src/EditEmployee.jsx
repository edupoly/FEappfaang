import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function EditEmployee() {
  var { id } = useParams();
  var empForm = useFormik({
    initialValues: {
      firstname: "",
      bestpair: "",
      id: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:3500/updateEmployee", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => console.log(res));
    },
  });
  useEffect(() => {
    fetch(`http://localhost:3500/getEmployeeDetailsById/${id}`)
      .then((res) => res.json())
      .then((data) => empForm.setValues(data));
  }, [id]);
  return (
    <div>
      <h1>EditEmployee </h1>
      <form onSubmit={empForm.handleSubmit}>
        <input type="text" {...empForm.getFieldProps("firstname")} />
        <br />
        <input type="text" {...empForm.getFieldProps("bestpair")} />
        <br />
        <button>Update</button>
      </form>
    </div>
  );
}

export default EditEmployee;

// 1. Data Layer
// 2. Service Layer
// 3. Presentational Layer
