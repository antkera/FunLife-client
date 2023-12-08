import React, { useEffect, useState, useContext } from "react";
import service from "../../services/config";
import { AuthContext } from "../../context/auth.context";
import HashLoader from "react-spinners/HashLoader";
import OneTimebutton from "../../components/OneTimebutton";

export default function FindFriends() {
  const { payload } = useContext(AuthContext);
  const [peopleArr, setPeopleArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFriend, setIsFriend] = useState(true);

  const checkIfFriend = (friendsArr) => {
    friendsArr.includes(payload._id) ? setIsFriend(true) : setIsFriend(false);
  };

  const addFriend = (_id) => {
    const body = { receiver: _id };
    service.post("messages/friend", body);
  };

  const getData = async () => {
    const response = await service.get("/user/findFriends");
    console.log(response.data);
    setPeopleArr(response.data);
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
      <h2>Fun People</h2>
      {peopleArr.map((eachUser) => {
        if (eachUser._id === payload._id) {
          return;
        }
        return (
          <div key={eachUser._id} className="flex center margin">
            <p className="margin">{eachUser.username}</p>

            <OneTimebutton
              className="margin"
              funct={addFriend}
              functValue={eachUser._id}
              // textAfter={"already friends"}
              isDisabled={eachUser.friends.includes(payload._id)}
            >
              request friendship
            </OneTimebutton>

            {/* <button
              disabled={eachUser.friends.includes(payload._id)}
              className="margin"
              onClick={() => {
                addFriend(eachUser._id);
              }}
            >
              {eachUser.friends.includes(payload._id)
                ? "already friends"
                : "Add as a friend"}
            </button> */}
          </div>
        );
      })}
    </div>
  );
}
