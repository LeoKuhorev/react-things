import React, { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ThingList from "./components/ThingList/ThingList";

function App() {
  const initial_things = [
    {
      id: uuid(),
      name: "item 1",
      price: 50,
    },
    {
      id: uuid(),
      name: "item 2",
      price: 23,
    },
    {
      id: uuid(),
      name: "item 3",
      price: 45,
    },
    {
      id: uuid(),
      name: "item 4",
      price: 43,
    },
    {
      id: uuid(),
      name: "item 5",
      price: 12,
    },
  ];

  const [things, setThings] = useState(initial_things);
  let count = things.length;

  return (
    <div>
      <Header count={count} />
      <ThingList things={things} setThings={setThings} />
      <Footer copyright=" Leo & Will" />
    </div>
  );
}

export default App;
