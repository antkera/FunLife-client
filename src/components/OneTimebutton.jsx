import { useState } from "react";

export default function OneTimebutton(props) {
  const { funct, functValue, textAfter, children } = props;
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <button
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
