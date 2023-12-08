import { useState } from "react";
import service from "../../services/config";

export default function OneMessage({ eachMessage, setDisplayType}) {
  const [isDisabled, setIsDisabled] = useState(false)
  const { sender, receiver, fun, isFresh, message, category, timestamps, _id} =
    eachMessage;
console.log("key", _id)

    const handleBeFriends = async(id) => {
      setIsDisabled(true)
      const deleteRes = await service.delete(`/messages/delete/${_id}`)
      const response = await service.patch("/user/addFriend" , {id})


      setDisplayType(response.data)
      
    }
    const noNew = async() => {
      try {
        await service.put(`messages/notFresh/${_id}`)
      } catch (error) {
        console.log(error)
      }
      
    }
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
      {category==="friendReq"? <button disabled={isDisabled} className="stdButt" onClick={() => {handleBeFriends(sender._id)}}>Be friend</button>: "adios"}
      <p>{timestamps}</p>

    </div>
  );
}
