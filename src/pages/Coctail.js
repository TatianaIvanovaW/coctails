import React from "react";
import { Link } from "react-router-dom";

import { Image } from "react-bootstrap";
import "./coctail.css";

export default function Coctail(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <Link to={`/home/${props.ad}/${props.id}`}>More...</Link>
      <div className="flex">
        <Image className="img" src={props.img} rounded />
      </div>
    </div>
  );
}
