import { useEffect, useState } from "react";
import MessagesDisplay from "../../components/messages/MessagesDisplay";

export default function Messages() {
  const [isCreating, setIsCreating] = useState(false);
  const [displayType, setDisplayType] = useState("received");
  const classMessageForm = "border";

  return (
    //llamar al BE
    <div>
      <div className="buttonContainer">
        <button
          className="button"
          onClick={() => {
            setDisplayType("received");
          }}
        >
          Received messages
        </button>
        <button
          className="button"
          onClick={() => {
            setDisplayType("send");
          }}
        >
          Send message
        </button>
        <button
          className="button"
          onClick={() => {
            setDisplayType("sended");
          }}
        >
          Sended messages
        </button>
      </div>

      <MessagesDisplay type={displayType} setDisplayType={setDisplayType} />
    </div>
  );
}
