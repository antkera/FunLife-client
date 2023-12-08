import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/config";
import { AuthContext } from "../../context/auth.context";
import OneTimebutton from "../../components/OneTimebutton";

export default function NewFun() {
  const baseURL = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [friendsArr, setFriendsArr] = useState([]);
  const [guestsArr, setGuestsArr] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    if (!event.target.files[0]) {
      // to prevent accidentally clicking the choose file button and not selecting a file
      return;
    }

    setIsUploading(true); // to start the loading animation
    console.log(event.target.files[0]);
    const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
    uploadData.append("image", event.target.files[0]);
    //                   |
    //     this name needs to match the name used in the middleware in the backend => uploader.single("image")

    try {
      const response = await service.post(`${baseURL}/upload`, uploadData);

      setImageUrl(response.data.imageUrl);
      //                          |
      //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });

      setIsUploading(false); // to stop the loading animation
    } catch (error) {
      navigate("/error");
    }
  };

  //-------------------------------------

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
    const { title, description, date, time, isPublic } = e.target;

    const newFun = {
      title: title.value,
      description: description.value,
      date: date.value,
      time: time.value,
      mainImg: imageUrl,
      isPublic: isPublic.checked,
    };
    console.log("hola");
    try {
      console.log(`enviando ${{ newFun, guestsArr }}`);
      await service.post("/user/newFun", { newFun, guestsArr });
      navigate("/user/myFuns");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div className="CreateFunDiv">
      <h1>Creating a new Fun</h1>

      <form className="CreateFunForm" onSubmit={handleNewFun}>
        <label htmlFor="title">Title:</label>
        <br />
        <input type="text" name="title" />

        <br />

        <label htmlFor="description">Description</label>
        <br />
        <textarea type="text" name="description" />

        <br />

        <label htmlFor="date">date:</label>
        <br />
        <input className="maxW" type="date" name="date" />

        <br />

        <label htmlFor="time">time:</label>
        <br />
        <input className="maxW" type="time" name="time" />
        <br />
        <div>
          <hr />
          <div>
            <label htmlFor="image">Image: </label>
            <input
              type="file"
              name="image"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
            {/* below disabled prevents the user from attempting another upload while one is already happening */}
          </div>

          {/* to render a loading message or spinner while uploading the picture */}
          {isUploading ? <h3>... uploading image</h3> : null}
          {console.log(isUploading)}
          {/* below line will render a preview of the image from cloudinary */}
          {imageUrl ? (
            <div>
              <img src={imageUrl} alt="img" width={200} />
            </div>
          ) : null}
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" name="isPublic" /> Make it public!
          </label>
        </div>

        {friendsArr.map((each) => {
          return (
            <div className="buttonContainer" key={each._id}>
              <OneTimebutton
                className="stdButt"
                funct={setGuestsArr}
                functValue={[...guestsArr, each._id]}
                textAfter={`${each.username} selected`}
              >
                invite {each.username}
              </OneTimebutton>
            </div>
          );
        })}

        <hr />

        <button type="submit">Create</button>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </form>
    </div>
  );
}
