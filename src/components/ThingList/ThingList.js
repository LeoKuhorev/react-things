import React from "react";
import Thing from "./Thing";
import AddThing from "./AddThing";

export default function ThingList(props) {

  const deleteItem = (e) => {
    console.log(e.target);
  }

  return (
    <div className="container full-height" >
      <AddThing setThings={props.setThings} things={props.things} />

      <ul className="list-group list-group-flush">
        {props.things.map((thing) => (
          <Thing thing={thing} key={thing.id} id={thing.id} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}
