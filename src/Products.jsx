import React, { useEffect, useState } from "react";

function Products() {
  var [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3500/products", {
      headers: {
        token: window.localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data]);
      });
  }, []);
  return (
    <div className="border border-2 m-2 p-2 border-danger">
      <h1>Products</h1>
      <ul>
        {products?.map((product) => {
          return (
            <li key={product.id}>
              <b>{product.title}</b>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
