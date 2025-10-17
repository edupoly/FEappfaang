import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Navbar() {
  var { userStatus, logout } = useContext(UserContext);
  console.log(userStatus);
  return (
    <div>
      <ul className="d-flex flex-wrap list-unstyled gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        {userStatus && (
          <>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/employees">Employees</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            </li>
          </>
        )}
        {!userStatus && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
