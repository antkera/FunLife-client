import { useEffect, useState } from "react";

export default function OneTimebutton(props) {
  const { funct, functValue, textAfter, children } = props;
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    setIsDisabled(props.isDisabled);
  }, []);

  return (
    <button
      className={props.className}
      disabled={isDisabled}
      onClick={() => {
        setIsDisabled(true);
        funct(functValue);
      }}
    >
      {isDisabled ? textAfter : children}
    </button>
  );
}
