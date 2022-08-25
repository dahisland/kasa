import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Lodging = () => {
  const [data, setData] = useState([]);
  const { lodgingID } = useParams();

  useEffect(() => {
    fetch("./data/logements.json")
      .then((res) => res.json())
      .then((data) => setData(data.find((item) => item.id === lodgingID)));
  });

  return (
    <div>
      <Header />
      {data.title}
    </div>
  );
};

export default Lodging;
