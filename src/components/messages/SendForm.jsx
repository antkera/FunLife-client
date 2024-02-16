import { useEffect, useState } from "react";
import service from "../../services/config";
import { HashLoader } from "react-spinners";

export default function SendForm({ setDisplayType }) {
  const [friendsArr, setFriendsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // funtions

  const handleNewMessage = async (e) => {
    e.preventDefault();
    const { receiver, message } = e.target;

    try {
      const response = await service.post("/messages/message", {
        receiver: receiver.value,
        message: message.value,
      });
      setDisplayType(response.data);
    } catch (error) {
      console.log(error)
    }

    console.log(e.target);
  };

  const showFriends = async () => {
    try {
      const response = await service.get("/user/myFriends");
      console.log(response.data);
      setFriendsArr(response.data.friends);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  //useEffects

  useEffect(() => {
    showFriends();
  }, []);
  //loading Spiner
  if (isLoading === true) {
    return (
      <div className="spinnerContainer">
        <HashLoader color={"orange"} size={100} />
      </div>
    );
  }

  //return------------------
  return (
    <form className="flex column borderRadius" onSubmit={handleNewMessage}>
      <div>
        <label htmlFor="receiver">To: </label>

        <select className="borderRadius" name="receiver">
          {friendsArr.map((each) => {
            return (
              <option key={each._id} value={each._id}>
                {each.username}
              </option>
            );
          })}
        </select>
      </div>

      <textarea
        required={true}
        className="borderRadius margin"
        type="text"
        name="message"
      />
      <p></p>

      <button className="margin borderRadius">Send</button>
    </form>
  );
}
