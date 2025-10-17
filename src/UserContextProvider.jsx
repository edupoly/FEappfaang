import { useState, useEffect } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [userStatus, setUserStatus] = useState(false);
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
  }
  function logout() {
    setUserStatus(false);
  }
  return (
    <UserContext.Provider value={{ userStatus, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
