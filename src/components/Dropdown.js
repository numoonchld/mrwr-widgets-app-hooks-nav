import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, selected, onSelectedChange, options }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true
      });
    };
  }, []);

  // console.log("CURRENT REF IS:", ref.current);

  return (
    <>
      <div className="ui form" ref={ref}>
        <div className="field">
          <label className="label" htmlFor="dropdownOptions">
            {label}
          </label>
          <div
            id="dropdownOptions"
            className={`ui selection dropdown ${
              open ? `visible active` : null
            }`}
            onClick={() => setOpen(!open)}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? `visible transition` : null}`}>
              {options
                .filter((option) => option.value !== selected.value)
                .map((option) => (
                  <div
                    key={option.value}
                    className="item"
                    onClick={() => onSelectedChange(option)}
                  >
                    {option.label}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* <p className={selected.value}> {selected.label} </p> */}
    </>
  );
};

export default Dropdown;
