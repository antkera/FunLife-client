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
        <NavLink to="/">Home</NavLink>

        <button onClick={handleLogOut}>cerrar sesion</button>
      </nav>
    );
  } else {
    return (
      <nav>
        <NavLink to="/signup">Sign up |</NavLink>
        <NavLink to="/login">| Log in</NavLink>
      </nav>
    );
  }
}