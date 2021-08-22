import "./styles.css";
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import items from "./data/items";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import options from "./data/options";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

export default function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

// WIKIPEDIA API:
// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming
