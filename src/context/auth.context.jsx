import { createContext, useEffect, useState } from "react";
import service from "../services/config";

const AuthContext = createContext();

const AuthWrapper = (props) => {
  const [payload, setPayload] = useState({ username: "friend" });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticateUser = async () => {
    try {
      const response = await service.get("/auth/verify");
      setIsLoggedIn(true);
      setPayload(response.data.payload);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    authenticateUser();
  }, []);

  const passedContext = {
    payload,
    authenticateUser,
    isLoggedIn,
  };

  if (isLoading) {
    return <h4>cargando...</h4>;
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthWrapper };
