import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Lodging = () => {
  const [data, setData] = useState([]);
  const { lodgingID } = useParams();

  useEffect(() => {
    fetch("./data/logements.json")
      .then((res) => res.json())
      .then((data) => setData(data.find((item) => item.id === lodgingID)));
  }, [lodgingID]);
  return (
    <div>
      <Header />
      <main className="lodgingPage_main">
        <section className="lodgingPageMain_infos">
          <div>
            <h1>{data.title}</h1>
            <h2>{data.location}</h2>
            <p>tags</p>
          </div>
          <div>
            <p>Nom prénom</p>
            <p>img</p>
            <p>Etoiles</p>
          </div>
        </section>
        <section className="lodgingPageMain_description">
          <article className="infos_card">
            <Dropdown
              dropdownContent={data.description}
              dropdownTitle="Description"
            />
          </article>
          <article className="infos_card">
            <Dropdown
              dropdownContent={data.equipments}
              dropdownTitle="Équipement"
            />
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Lodging;
