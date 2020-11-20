import React from "react";

export default function CoctailInfo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt="coctail"></img>
      <h3> how to make:</h3>
      <p>{props.make}</p>
    </div>
  );
}
