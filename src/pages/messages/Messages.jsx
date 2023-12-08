import { useEffect, useState } from "react";
import MessagesDisplay from "../../components/messages/messagesDisplay";

export default function Messages() {
  const [isCreating, setIsCreating] = useState(false);
  const [displayType, setDisplayType] = useState("received");
  const classMessageForm = "border";

  return (
    //llamar al BE
    <div>
      <div className="buttonContainer">
        <button
          className="stdButt"
          onClick={() => {
            setDisplayType("received");
          }}
        >
          mensajes recibidos
        </button>
        <button
          className="stdButt"
          onClick={() => {
            setDisplayType("send");
          }}
        >
          Enviar mensaje
        </button>
        <button
          className="stdButt"
          onClick={() => {
            setDisplayType("sended");
          }}
        >
          mensajes enviados
        </button>
      </div>

      <MessagesDisplay type={displayType} setDisplayType={setDisplayType} />
    </div>
  );
}
