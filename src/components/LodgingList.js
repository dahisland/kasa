import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LodgingList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("./data/logements.json");
      const json = await data.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <ul className="homepageMain_lodgingList">
      {data.map((item, index) => (
        <li className="lodgingList_card" key={item.id + "-lodging-" + index}>
          <NavLink to={"/lodging-" + item.id}>
            <h3>{item.title}</h3>
            <picture>
              <img src={item.cover} alt={item.title}></img>
            </picture>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default LodgingList;
