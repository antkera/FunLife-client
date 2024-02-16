import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

export default function Navbar({ transition }) {
  const navigate = useNavigate();

  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  // const [showTransition, setShowTransition] = useState(false);

  const handleLogOut = () => {
    window.alert("You are logged out");
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/login");
  };

  if (isLoggedIn) {
    return (
      <nav id="Nav" className={transition ? "showTransition " : "notShow"}>
        <div className="navbar2">
          <div className="navInt">
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

          <button className="logOut" onClick={handleLogOut}>
            <i className="fi fi-ss-address-card "></i>
          </button>
        </div>
        <hr />
      </nav>
    );
  } else {
    return (
      <nav id="Nav" className={transition ? "showTransition" : "notShow"}>
        <div className="navbar2">
          <span className="navspan">
            <NavLink to="/signup"> Sign up </NavLink>
          </span>

          <span className="navspan">
            <NavLink to="/login"> Log in </NavLink>
          </span>
        </div>
      </nav>
    );
  }
}
