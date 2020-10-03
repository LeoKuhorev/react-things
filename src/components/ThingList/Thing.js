import React from "react";

export default function Thing(props) {
  return (
    <li className="list-group-item list-group-item-warning d-flex justify-content-between align-items-center">
      <p>
        {props.thing.name}
        <span className="font-weight-bold"> (${props.thing.price})</span>
      </p>
      <button>
        <i className="fas fa-times-circle text-danger"></i>
      </button>
    </li>
  );
}
