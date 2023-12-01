import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/config";
import { AuthContext } from "../../context/auth.context";


export default function Login() {

  const {authenticateUser} =  useContext(AuthContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const credentials = {email, password}

      const response = await service.post("/auth/login", credentials)
      console.log(response)
      localStorage.setItem("authToken", response.data.authToken )
      await authenticateUser()
      navigate("/")
      
    } catch (error) {
      console.log(error)
      if(error.response.status === 400){
        setErrorMessage(error.response.data.errorMessage)
      }else{
        navigate("/error")
      }
    }
  };

  return (
    <div>
      <h1>Log in</h1>

      <form onSubmit={handleLogin}>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <hr />

        <button type="submit">Submit</button>
        <p style={{color: "red"}}>{errorMessage}</p>
      </form>
    </div>
  );
}


