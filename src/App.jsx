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

export default function App() {
  return (
    <div>
      <Navbar />
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

        {/* error FE routes */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
