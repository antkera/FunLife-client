import React, { useEffect, useState, useContext } from "react";
import service from "../../services/config";
import { AuthContext } from "../../context/auth.context";
import HashLoader from "react-spinners/HashLoader";
import OneTimebutton from "../../components/OneTimebutton";
import FunCard from "../../components/FunCard";

export default function PublicFuns() {
  const { payload } = useContext(AuthContext);
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
    <div className="funArrContainer">
      {funsArr.map((eachfunColl) => {
        
        return (
          <div key={eachfunColl._id} className="funArrContainer">
          
          {eachfunColl.funs.map((eachFun) => {return(
            <FunCard key={eachFun._id} fun={eachFun}/>
            )})}
            
            <h3 className="margin underline">{eachfunColl.title}</h3>
          </div>
        );
      })}
      <h2>Public Funs</h2>

    </div>
  );
}
