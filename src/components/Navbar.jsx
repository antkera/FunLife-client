import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

export default function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/login");
  };

  if (isLoggedIn) {
    return (
      <nav>
        <div className="navbar">
          <span className="navspan">
            <NavLink to="/">Home</NavLink>
          </span>
          <span className="navspan">
            <NavLink to="/user/newFun">NewFun</NavLink>
          </span>
          <span className="navspan">
            <NavLink to="/user/myProfile">My Profile</NavLink>
          </span>
          <span className="navspan">
            <NavLink to="/user/findFriends">Find friends</NavLink>
          </span>
          <span className="navspan">
            <NavLink to="/user/myFuns">My Funs</NavLink>
          </span>
          <span className="navspan">
            <NavLink to="/user/publicFuns">Public Funs</NavLink>
          </span>
          <span className="navspan">
            <NavLink to="/messages">Messages</NavLink>
          </span>
        </div>

        <button className="exitButton" onClick={handleLogOut}>
          {" "}
          <span>
            <i class="fi fi-ss-address-card"></i>
          </span>
        </button>
      </nav>
    );
  } else {
    return (
      <nav>
        <NavLink to="/signup"> Sign up </NavLink>
        <NavLink to="/login"> Log in </NavLink>
      </nav>
    );
  }
}
