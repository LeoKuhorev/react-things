import React from "react";

export default function Thing(props) {
  return (
    <li className="list-group-item list-group-item-warning d-flex justify-content-between">
      {props.thing.name} 
      <span className="font-weight-bold">${props.thing.value}</span>
    </li>
  );
}
