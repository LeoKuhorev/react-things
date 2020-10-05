import React from "react";

export default function Thing(props) {


  return (
    <li className="list-group-item list-group-item-warning d-flex justify-content-between align-items-center">
      <p>
        {props.thing.name}
        <span className="font-weight-bold"> (${props.thing.price})</span>
      </p>
      <button onClick={() => props.deleteItem(props.thing.id)} className="btn btn-danger px-3" style={thingStyle}>
        <i className="fas fa-times-circle fa-lg"></i>
      </button>
    </li>
  );
}


const thingStyle = {
  borderRadius: '5px'
}