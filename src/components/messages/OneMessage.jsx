import { useState } from "react";
import service from "../../services/config";

export default function OneMessage({ eachMessage, setDisplayType, type }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const { sender, receiver, fun, isFresh, message, category, timestamps, _id } =
    eachMessage;
  console.log("key", _id);

  const handleBeFriends = async (id) => {
    setIsDisabled(true);
    if (_id !== sender) {
      await service.delete(`/messages/delete/${_id}`);
      const response = await service.patch("/user/addFriend", { id });
      setDisplayType(response.data);
    } else {
      setDisplayType("You can't accept the invitation you've sent! ");
    }
  };
  const noNew = async () => {
    try {
      await service.put(`messages/notFresh/${_id}`);
    } catch (error) {
      console.log(error);
    }
  };
  isFresh &&
    setTimeout(() => {
      noNew();
    }, 10000);

  return (
    <div className="oneMessage">
      <p>{isFresh && "NEW!!"}</p>
      <p>{sender.username || receiver.username}:</p>
      <p>{fun && fun.description}</p>
      <p>{message}</p>
      {category === "friendReq" ? (
        type !== "sended" ? (
          <button
            disabled={type === "sended" ? !isDisabled : isDisabled} // isDisabled === false
            className="stdButt"
            onClick={() => {
              handleBeFriends(sender);
            }}
          >
            Be friend
          </button>
        ) : (
          <p className="note">Waiting {receiver.username}</p>
        )
      ) : (
        "adios"
      )}
      <p>{timestamps}</p>
    </div>
  );
}
