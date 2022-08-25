import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HomeMain = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data/logements.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main>
      <ul className="list-cards">
        {data.map((item) => (
          <NavLink to={"/lodging-" + item.id} key={item.id} className="card">
            <li>
              <h3>{item.title}</h3>
              <picture>
                <img src={item.cover} alt={item.title}></img>
              </picture>
            </li>
          </NavLink>
        ))}
      </ul>
    </main>
  );
};

export default HomeMain;
