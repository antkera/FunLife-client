import { useState } from "react";

export default function FunCard(props) {

  const { collection, description, participants, time, date, mainImg } = props.fun;

 

  return (
    <div className= {props.className}>
      <h2>{collection.title}</h2>

      <p>{description}</p>

      <p>{participants}</p>
      <p>{time}</p>
      <p>{date}</p>
      <hr />
    </div>
  );
}
