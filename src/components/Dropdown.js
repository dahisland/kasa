import React, { useState } from "react";

const Dropdown = ({ dropdownContent, dropdownTitle }) => {
  const [dropdownClass, setDropdownClass] = useState("dropdown--deployed");

  return (
    <div className={dropdownClass}>
      <h3>
        {dropdownTitle}
        <span
          onClick={() =>
            dropdownClass === "dropdown"
              ? setDropdownClass("dropdown--deployed")
              : setDropdownClass("dropdown")
          }
        >
          <img src="./arrow-icon.svg" alt="icon deploy"></img>
        </span>
      </h3>
      <div className="dropdown_content">
        {Array.isArray(dropdownContent) === false ? (
          <p>{dropdownContent}</p>
        ) : (
          dropdownContent.map((el, index) => <p key={el + index}>{el}</p>)
        )}
      </div>
    </div>
  );
};

export default Dropdown;
