import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LodgingHeader from "../components/LodgingHeader";
import LodgingAside from "../components/LodgingAside";
import LodgingArticle from "../components/LodgingArticle";
import Error404 from "./Error404";
import LodgingGallery from "../components/LodgingGallery";

const Lodging = () => {
  const { lodgingID } = useParams();
  const [data, setData] = useState({
    equipments: [],
    host: { name: "", picture: "" },
    pictures: [],
    tags: [],
  });
  // const [indexGallery, setIndexGallery] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const data = await fetch("./data/logements.json");
      const json = await data.json();
      const lodgingData = json.find((item) => item.id === lodgingID);
      lodgingData ? setData(lodgingData) : setData(null);
    };
    fetchData();
    // return () => {};
  }, [lodgingID]);

  return data !== null ? (
    <div className="contentPage">
      <Header />
      <main className="lodgingPage_main">
        <LodgingGallery data={data} />
        <section className="lodgingPageMain_lodgingInfos">
          <div className="lodgingInfos_general">
            <LodgingHeader data={data} />
            <LodgingAside data={data} />
          </div>
          <LodgingArticle data={data} />
        </section>
      </main>
      <Footer />
    </div>
  ) : (
    <Error404 />
  );
};

export default Lodging;
