import { useEffect, useState } from "react";
import service from "../services/config";
import OneTimebutton from "./OneTimebutton";

export default function ChooseFriends({ _id, setGuestsArr, guestsArr }) {
  const [friendsArr, setFriendsArr] = useState([]);
  const [isHidde, setIsHidde] = useState(true);

  //*  ------------------------------------------------------------------------------------------FUNCION SHOWFRIENDS

  const showFriends = async () => {
    const response = await service.get("/user/myFriends");
    console.log(response.data);
    setFriendsArr(response.data.friends);
  };
  //*  ------------------------------------------------------------------------------------------FUNCION SHOWFRIENDS

  useEffect(() => {
    showFriends();
  }, []);

  return (
    <div>
      {isHidde ? (
        <button
          onClick={() => {
            setIsHidde((n) => {
              !n;
            });
          }}
        >
          invite your friends
        </button>
      ) : (
        friendsArr.map((each) => {
          return (
            <div className="chooseFrineds" key={each._id}>
              <OneTimebutton
                key={each._id}
                funct={setGuestsArr}
                functValue={[...guestsArr, each._id]}
                textAfter={`${each.username} selected`}
              >
                invite {each.username}
              </OneTimebutton>
            </div>
          );
        })
      )}
    </div>
  );
}
