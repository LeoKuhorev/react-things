import React from 'react';
import './App.css';

import Header from "./components/Header"
import Footer from "./components/Footer"
import ThingList from "./components/ThingList"

function App() {
  return (
    <div>
      <Header />
      <ThingList />
      <Footer />
    </div>
  );
}

export default App;
