import React from "react";

const LodgingHeader = ({ data }) => {
  return (
    <header className="lodgingInfos_headerLodging">
      <div className="headerLodging_title">
        <h1>{data.title}</h1>
        <h2>{data.location}</h2>
      </div>
      <div className="headerLodging_landlord">
        <div className="landlord_identity">
          <p>
            {data.host.name.split(" ")[0]} <br />
            {data.host.name.split(" ")[1]}{" "}
          </p>
          <img src={data.host.picture} alt={data.host.name}></img>
        </div>
      </div>
    </header>
  );
};

export default LodgingHeader;
