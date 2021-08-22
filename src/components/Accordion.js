import React, { useState } from "react";

const AccordionElement = ({ item, index, itemNumber, onTitleClick }) => {
  const activeStatus = itemNumber === index ? `active` : null;

  return (
    <React.Fragment key={item.title}>
      <div
        className={`title ${activeStatus}`}
        onClick={() => onTitleClick(index)}
      >
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className={`content ${activeStatus}`}>
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  );
};

const Accordion = ({ items }) => {
  const [itemNumber, setItemNumber] = useState(0);

  const onTitleClick = (index) => {
    console.log(index);
    setItemNumber(index);
  };

  return (
    <>
      <div className="ui styled accordion">
        {items.map((item, index) => (
          <AccordionElement
            key={index}
            item={item}
            index={index}
            itemNumber={itemNumber}
            onTitleClick={onTitleClick}
          />
        ))}
      </div>
    </>
  );
};

export default Accordion;
