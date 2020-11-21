import React from "react";
import { Link } from "react-router-dom";

import { Image, Button } from "react-bootstrap";
import "./coctail.css";

export default function Coctail(props) {
  return (
    <div>
      <div className="flow">
        <h2>{props.name}</h2>
        <Link to={`/home/${props.ad}/${props.id}`}>
          <Button variant="outline-secondary">More...</Button>
        </Link>
      </div>
      <div className="flex">
        <Image className="img" src={props.img} rounded />
      </div>
    </div>
  );
}
