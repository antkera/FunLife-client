import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import service from "../../services/config";
import FunCard from "../../components/FunCard";

export default function MyFuns() {
  const [funArr, setFunArr] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await service.get("/user/myFuns");
      setFunArr(response.data.funs);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading === true) {
    return (
      <div className="spinnerContainer">
        <SyncLoader color={"blue"} size={50} />
      </div>
    );
  }

  return (
    <div className="funArrContainer">
      {funArr.map((each) => {
        return <FunCard key={each._id} fun={each} />;
      })}
    </div>
  );
}
