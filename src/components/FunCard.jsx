import { useContext, useEffect, useState } from "react";
import funImg from "../../public/fun.jpg";
import OneTimebutton from "./OneTimebutton";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import ChooseFriends from "./ChooseFriends";
import service from "../services/config";

export default function FunCard(props) {
  //context & navigate
  const { payload } = useContext(AuthContext);
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_SERVER_URL;

  //states
  const [isEditable, setIsEditable] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [guestsArr, setGuestsArr] = useState([]);
  const [imageUrl, setImageUrl] = useState(props.fun.mainImg);
  const [isChecked, setIschecked] = useState(false);
  const [formCollection, setFormCollection] = useState(props.fun.collection);
  const [formDescription, setFormDescription] = useState(props.fun.description);
  const [formParticipants, setFormParticipants] = useState(
    props.fun.participants
  );
  const [formTime, setFormTime] = useState(props.fun.time);
  const [formDate, setFormDate] = useState(props.fun.date);

  //* -------------------------------------------------------------------------------------------FUNCION UPLOAD

  const handleFileUpload = async (event) => {
    if (!event.target.files[0]) {
      return;
    }

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append("image", event.target.files[0]);

    try {
      const response = await service.post(`${baseURL}/upload`, uploadData);

      setImageUrl(response.data.imageUrl);

      setIsUploading(false);
    } catch (error) {
      navigate("/error");
    }
  };

  //*  ------------------------------------------------------------------------------------------FUNCION UPLOAD
  //!---------
  //*  ------------------------------------------------------------------------------------------FUNCION FORK

  const handleFork = async (e) => {
    e.preventDefault();

    const forkFun = {
      collection: props.fun.collection,
      description: formDescription,
      date: formDate,
      time: formTime,
      mainImg: imageUrl,
      isPublic: isChecked,
    };

    try {
      navigate("/user/myFuns");
      await service.post("/user/forkFun", { forkFun, guestsArr });
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  //*  ------------------------------------------------------------------------------------------FUNCION FORK

  // - funtions:

  const when = new Date(formDate).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedDate = new Date(formDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const handleEdit = async () => {
    //implement next time
    console.log("isPublic");
  };

  const handleDelete = async () => {
    //implement next time
    console.log("Delete");
  };

  return isEditable ? (
    //--------------------------------------------------formulario fork

    <form className={props.className || "funCard "} onSubmit={handleFork}>
      <h2>{formCollection.title}</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="imagen" />
      ) : (
        <img src={funImg} alt="imagen" />
      )}

      <div>
        <label htmlFor="image">Image: </label>
        <input
          type="file"
          name="image"
          onChange={handleFileUpload}
          disabled={isUploading}
        />
      </div>
      {isUploading ? <h3>... uploading image</h3> : null}

      <br />
      <label htmlFor="description">Description</label>
      <br />
      <textarea
        onChange={(e) => {
          setFormDescription(e.target.value);
        }}
        type="text"
        name="description"
        value={formDescription}
      />

      <br />

      <br />
      <label htmlFor="date">When?</label>
      <input
        onChange={(e) => {
          setFormDate(e.target.value);
        }}
        type="date"
        name="date"
      />

      <label htmlFor="time">hour?</label>
      <input
        onChange={(e) => {
          setFormTime(e.target.value);
        }}
        type="time"
        name="time"
      />

      <label>
        <input
          onChange={(e) => {
            setIschecked(e.target.checked);
          }}
          type="checkbox"
          name="isPublic"
        />{" "}
        Make it public!
      </label>

      <ChooseFriends
        _id={payload._id}
        setGuestsArr={setGuestsArr}
        guestsArr={guestsArr}
      />

      <div className="flex center">
        <OneTimebutton funct={handleFork}>Fork</OneTimebutton> <hr />
        <OneTimebutton
          notDisable={true}
          funct={() => {
            setIsEditable(!isEditable);
          }}
        >
          back
        </OneTimebutton>
      </div>
      <div>
        <hr />
      </div>
    </form>
  ) : (
    //---------------------------------------------------renderizado
    <div className={props.className || "funCard"}>
      <h2 className="mainTitle">{formCollection.title}</h2>
      {imageUrl ? (
        <img src={imageUrl} alt="imagen" />
      ) : (
        <img src={funImg} alt="imagen" />
      )}

      {formDescription ? <p>{formDescription}</p> : <p>A simple Fun</p>}
      {formParticipants.length > 0 ? (
        <p>{formParticipants}</p>
      ) : (
        <p>will you come?</p>
      )}

      <p>
        See you on <strong>{when}</strong> at <strong>{formTime}</strong>
      </p>
      <div>
        <div>
          <p className="isPublic">
            {props.fun.isPublic
              ? "This Fun is public"
              : "This Fun is not public"}
          </p>
        </div>
      </div>
      <div className="flex center">
        {}
        <OneTimebutton funct={handleEdit}>Edit</OneTimebutton> <hr />
        <OneTimebutton
          notDisable={true}
          funct={() => {
            setIsEditable(!isEditable);
          }}
        >
          Fork
        </OneTimebutton>{" "}
        <hr />
        <OneTimebutton funct={handleDelete}>Delete</OneTimebutton>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}
