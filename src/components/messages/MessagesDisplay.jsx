// llama a BE y trae array de mensajes
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from "react";
import SendForm from "./SendForm";
import OneMessage from "./OneMessage";
import service from "../../services/config";

export default function MessagesDisplay({ type, setDisplayType }) {
  console.log("message display");
  const [isLoading, setIsLoading] = useState(true);
  const [messagesArr, setMessagesArr] = useState([]);
  //   <OneMessage oneMessage={eachMessage} />

  const getData = async () => {
    console.log("getData");
    try {
      const response = await service.get(`/messages/${type}`);
      console.log("response", response.data);
      setMessagesArr(response.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      console.log("messaage ", messagesArr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [type]);

  if (isLoading === true) {
    return (
      <div className="spinnerContainer">
        <SyncLoader color={"blue"} size={50} />
      </div>
    );
  }

  return (
    <div className={type}>
      {type === "send" ? (
        <SendForm setDisplayType={setDisplayType} />
      ) : type === "sended" || type === "received" ? (
        messagesArr.map((eachMessage) => (
          <OneMessage
            type={type}
            setDisplayType={setDisplayType}
            key={eachMessage._id}
            eachMessage={eachMessage}
          />
        ))
      ) : null}
      <p></p>
      <hr />
      {type === "sended" || type === "send" || type === "received" ? (
        <h2>{type} Messages</h2>
      ) : (
        <h2>{type}</h2>
      )}
    </div>
  );
}
