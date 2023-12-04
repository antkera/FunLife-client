import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import service from "../../services/config";
import HashLoader from "react-spinners/HashLoader";

export default function MyProfile() {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { payload } = useContext(AuthContext);
  console.log(payload);

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
      <div className="spinnerContainer flex center">
        <HashLoader color={"orange"} size={50} />
      </div>
    );
  }
  return (
    <div>
      <div className="profileContainer">
        <h3>
          {profile.username} {profile.lastName}
        </h3>
        <p>email: {profile.email} </p>
        <p>
          Friends:
          {profile.friends.map((eachFriend) => {
            return <p key={eachFriend._id}> ➡ | {eachFriend.username}</p>;
          })}
        </p>
        <h4>My Commentaries:</h4>

        <h4>My messages:</h4>

        <img src="" alt="" />
      </div>
    </div>
  );
}
