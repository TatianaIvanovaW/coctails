import React from "react";
import "./coctailinfo.css";
import { Badge } from "react-bootstrap";

export default function CoctailInfo(props) {
  return (
    <div>
      <h1 className="nameTit">{props.name}</h1>
      <div className="mainC">
        <img src={props.img} alt="coctail"></img>
        <div className="row">
          <h3 className="hm">
            <Badge variant="secondary">how to make:</Badge>
          </h3>
          <p className="para">{props.make}</p>
        </div>
      </div>
    </div>
  );
}
