import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import UserContextProvider from "./UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <div className="border border-2 m-2 p-2">
          <h1>App Component</h1>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
