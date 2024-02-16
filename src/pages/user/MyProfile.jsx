import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../context/auth.context";
import service from "../../services/config";
import SyncLoader from "react-spinners/SyncLoader";
import { NavLink } from "react-router-dom";

export default function MyProfile() {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const { payload } = useContext(AuthContext);

  const getData = async () => {
    const response = await service.get("/user/myProfile");
    setProfile(response.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading === true) {
    return (
      <div className="spinnerContainer">
        <SyncLoader speedMultiplier={1} color={"blue"} size={40} />
      </div>
    );
  }
  return (
    <div className="profileContainer">
      <h2 className="mainTitle">
        Hello {profile.username} {profile.lastName}
      </h2>
      <h3>This is your profile</h3>
      <h4>Personal data:</h4>
      <li>
        <strong>Name: </strong>
        <p className="capitalize">{profile.username}</p>
      </li>
      <li>
        <strong>Email: </strong>
      </li>

      <p>{profile.email}</p>
      <div>
        <strong>Friends:</strong>
        {profile.friends.length > 0 ? (
          profile.friends.map((eachFriend) => {
            return (
              <p className="capitalize" key={eachFriend._id}>
                {" "}
                ➡ {eachFriend.username}
              </p>
            );
          })
        ) : (
          <span>there are no friends yet!!</span>
        )}
      </div>
      <h4>
        My Commentaries:<span className="alert">*</span>
      </h4>

      <h4>
        My <NavLink to="/messages">Messages</NavLink>:
        <span className="alert">*</span>
      </h4>

      <img src="" alt="" />

      <hr />
      <span className="alert">* This will be implemented in future </span>
    </div>
  );
}
