import React, { useState } from "react";
import languageOptions from "../data/languageOptions";
import Dropdown from "./Dropdown";

const Translate = () => {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="ui form">
          <div className="field">
            <label htmlFor="inputText"> Enter Text to Translate </label>
            <input
              id="inputText"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
        </div>
        <Dropdown
          label="Select a Language"
          selected={language}
          onSelectedChange={setLanguage}
          options={languageOptions}
        />
      </div>
    </>
  );
};

export default Translate;
