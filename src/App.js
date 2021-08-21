import "./styles.css";
import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import items from "./data/items";
// import Search from "./components/Search";
// import Dropdown from "./components/Dropdown";
// import options from "./data/options";
import Translate from "./components/Translate";

export default function App() {
  return (
    <div className="App">
      <h1>Widgets App</h1>
      <Translate />
    </div>
  );
}

// WIKIPEDIA API:
// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming
