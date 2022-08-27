import React from "react";

const Slogan = ({ slogan, background }) => {
  return (
    <div className={background}>
      <h2>{slogan}</h2>
    </div>
  );
};

export default Slogan;
