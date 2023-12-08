import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import service from "../services/config";
import { HashLoader } from "react-spinners";
import FunCard from "../components/FunCard";

export default function Home() {
  const { payload } = useContext(AuthContext);
  console.log(payload);
  const welcomeMessage = `Hi ${payload.username}!, we are going to have Fun!.`;
  const [funsArr, setFunsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await service.get("/user/publicFuns");
    console.log(response.data);
    setFunsArr(response.data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading === true) {
    return (
      <div className="spinnerContainer flex center">
        <HashLoader color={"orange"} size={50} />
      </div>
    );
  }
  return (
    <div>
      <h1>Home</h1>
      <h2>{welcomeMessage}</h2>
      <div className="HomeColl">
      {funsArr.map((eachfunColl) => {
        
        return (
          <div key={eachfunColl._id} className="homeContainer">
          
          {eachfunColl.funs.map((eachFun) => {return(
            <img src={eachFun.mainImg} alt="" />
            )})}
            
          
          </div>
        );
      })}
    </div></div>
  );
}
