import { CloudConfig } from "@cloudinary/url-gen";
import { useEffect, useState } from "react";

export default function OneTimebutton(props) {
  const { funct, functValue, textAfter, children } = props;
  const [isDisabled, setIsDisabled] = useState(false);
  const notDisable = props.notDisable;
  useEffect(() => {
    setIsDisabled(props.isDisabled);
  }, []);

  return (
    <button
      className={props.className}
      disabled={notDisable ? false : isDisabled}
      onClick={(e) => {
        
        
        
        setIsDisabled(true);
        funct(functValue? functValue : e);
      }}
    >
      {isDisabled ? (textAfter ? textAfter : children) : children}
    </button>
  );
}
