import React from "react";
import "./CoctailsCategory.css";
import { Link } from "react-router-dom";

export default function CoctailsCategory(props) {
  return (
    <Link
      activeStyle={{
        fontWeight: "bold",
        color: "darkgreen",
      }}
      className="list1"
      to={`home/${props.id}`}
    >
      <div>{props.category}</div>
    </Link>
  );
}
