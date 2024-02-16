import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export default function Home() {
  const { payload } = useContext(AuthContext);
  const welcomeMessage = `Hi ${payload.username}! \n
  We are going to have Fun!.`;

  return (
    <div id="Home">
      <header className="header">
        <h1 className="mainTitle">Welcome to FunLife</h1>
        <p className="text">Discover and Share Exciting Events Near You</p>
      </header>

      <h2>{welcomeMessage}</h2>
      <section>
        <h2 className="resaltado">What is FunLife?</h2>
        <p>
          FunLife is a social platform where you can explore and create events
          that bring people together. Whether it is a concert, a sports game, or
          a simple get-together, FunLife helps you connect with like-minded
          individuals and make the most of your free time.
        </p>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Discover a variety of events happening in your area.</li>
          <li>Create your own events and invite friends to join.</li>
          <li>Connect with friends and expand your social circle.</li>
          <li>
            Stay updated with real-time notifications about events and messages.
          </li>
        </ul>
      </section>
    </div>
  );
}
