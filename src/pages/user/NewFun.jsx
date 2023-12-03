import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/config";
import { Cloudinary } from "@cloudinary/url-gen";
import { AuthContext } from "../../context/auth.context";
import OneTimebutton from "../../components/oneTimebutton";

export default function NewFun() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const cld = new Cloudinary({ cloud: { cloudName: "da9sa33le" } });
  const [friendsArr, setFriendsArr] = useState([]);
  const [guestsArr, setGuestsArr] = useState([]);

  const showFriends = async () => {
    const response = await service.get("/user/myFriends");
    console.log(response.data);
    setFriendsArr(response.data.friends);
  };

  useEffect(() => {
    showFriends();
  }, []);

  const handleNewFun = async (e) => {
    e.preventDefault();

    const { title, description, date, time, mainImg, isPublic } = e.target;

    const newFun = {
      title: title.value,
      description: description.value,
      date: date.value,
      time: time.value,
      mainImg: mainImg.value,
      isPublic: isPublic.checked,
    };

    console.log(newFun);
    console.log(e.target.files);

    try {
      await service.post("/user/newFun", { newFun, guestsArr });
      // navigate("/user/myProfile");
      console.log(`enviando ${{ newFun, guestsArr }}`);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        // navigate("/error");
      }
    }
  };

  return (
    <div>
      <h1>Creating a new Fun</h1>

      <form onSubmit={handleNewFun}>
        <label>Title:</label>
        <br />
        <input type="text" name="title" />

        <br />

        <label>Description</label>
        <br />
        <textarea type="text" name="description" />

        <br />

        <label>date:</label>
        <br />
        <input type="date" name="date" />

        {/*añadir los participantes*/}
        <br />

        <label>time:</label>
        <br />
        <input type="time" name="time" />
        <br />

        <label>Main Image:</label>
        <br />

        <input type="file" name="mainImg" />
        <br />
        <label>
          <input type="checkbox" name="isPublic" /> Make it public!
        </label>
        <br />

        {friendsArr.map((each) => {
          return (
            <div>
              <OneTimebutton
                funct={setGuestsArr}
                functValue={[...guestsArr, each._id]}
                textAfter={`${each.username} selected`}
              >
                invite {each.username}
              </OneTimebutton>
              <br />
            </div>
          );
        })}

        <hr />
        <button
          onClick={() => {
            console.log(guestsArr);
          }}
          type="button"
        >
          log
        </button>

        <button type="submit">Create</button>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </form>
    </div>
  );
}
