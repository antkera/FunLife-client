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
  return (
    <div>
      <span id="up"></span>
      <button className="homeButton" onClick={() => setIsNavBar(!isNavBar)}>
        <i className="fi fi-ss-grid"></i>
      </button>
      {isNavBar && <Navbar />}

      <br />
      <hr />

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
      <div className="back_to_top_container">
        <a id="back_to_top" href="#up">
          <i className="fi fi-ss-angle-double-small-up"></i>
        </a>
      </div>
    </div>
  );
}
