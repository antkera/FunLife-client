import "./App.css";
import { Routes, Route } from "react-router";
// pages
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Error from "./pages/error/Error";
import NotFound from "./pages/error/NotFound";

// components
import Navbar from "./components/Navbar";
import NewFun from "./pages/user/NewFun";
import MyProfile from "./pages/user/MyProfile";
import FindFriends from "./pages/user/FindFriends";
import MyFuns from "./pages/user/MyFuns";
import PublicFuns from "./pages/user/PublicFuns";
import Messages from "./pages/messages/Messages";
import { useState } from "react";

export default function App() {
  const [isNavBar, setIsNavBar] = useState(false);
  const [transition, setTransition] = useState(true);
  const handleNavbar = () => {
    if (isNavBar === transition) {
      setTransition(!transition);
    }
    if (isNavBar) {
      setTransition(false);
      setTimeout(() => {
        setIsNavBar(false);
      }, 300);
    } else {
      setIsNavBar(!isNavBar);
    }
  };
  return (
    <div className="App">
      <span id="up"></span>
      <div className="flex">
        <div className="buttonContainer">
          <button
            className="homeButton"
            onClick={() => {
              handleNavbar();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flexCenter">
          {isNavBar && <Navbar transition={transition} />}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/newFun" element={<NewFun />} />
          <Route path="/user/myFuns" element={<MyFuns />} />
          <Route path="/user/myProfile" element={<MyProfile />} />
          <Route path="/user/findFriends" element={<FindFriends />} />
          <Route path="/user/publicFuns" element={<PublicFuns />} />
          <Route path="/messages/" element={<Messages />} />

          {/* error FE routes */}
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div
        className="back_to_top_container"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Animación suave de scroll
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
}
