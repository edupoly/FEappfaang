import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

function UserContextProvider({ children }) {
  const [userStatus, setUserStatus] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    var d = window.localStorage.getItem("token") ? true : false;
    if (d) {
      setUserStatus(true);
    } else {
      setUserStatus(false);
    }
  }, []);
  function login() {
    setUserStatus(true);
    navigate("/");
  }
  function logout() {
    setUserStatus(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <UserContext.Provider value={{ userStatus, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
