import React from "react";
import "./CoctailsCategory.css";
import { Link } from "react-router-dom";

export default function CoctailsCategory(props) {
  return (
    <Link to={`home/${props.id}`}>
      <div className="list">{props.category}</div>
    </Link>
  );
}
