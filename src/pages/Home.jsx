import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export default function Home() {
  const { payload } = useContext(AuthContext);
  console.log(payload);
  const welcomeMessage = `Hi ${payload.username}!, we are going to have Fun!.`;
  console.log();
  return (
    <div>
      <h1>Home</h1>
      <h3>{welcomeMessage}</h3>
    </div>
  );
}
