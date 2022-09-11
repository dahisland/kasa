import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Slogan from "../components/Slogan";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutData = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div className="contentPage">
      <div>
        <Header />
        <Slogan slogan1="" slogan2="" background="slogan--mountain" />
      </div>

      <main className="about_main">
        {aboutData.map((item, index) => (
          <Dropdown
            dropdownContent={item.content}
            dropdownTitle={item.title}
            key={item.title + index}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default About;
