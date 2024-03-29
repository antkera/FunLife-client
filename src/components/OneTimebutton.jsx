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
      className={props.className || "button"}
      disabled={notDisable ? false : isDisabled}
      onClick={(e) => {
        e.preventDefault();

        setIsDisabled(true);
        funct(functValue ? functValue : e);
      }}
    >
      {isDisabled ? (textAfter ? textAfter : children) : children}
    </button>
  );
}
