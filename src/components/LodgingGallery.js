import React, { useState } from "react";

const LodgingGallery = ({ data }) => {
  const [indexGallery, setIndexGallery] = useState(0);

  return (
    <section className="lodgingPageMain_lodgingGallery">
      <div className="lodgingGallery_containerGallery">
        <picture>
          <img
            src={data.pictures[indexGallery]}
            alt={"image " + data.pictures[indexGallery]}
            className="containerGallery_image"
          ></img>
        </picture>
        <p className="containerGallery_counter">
          {indexGallery + 1}/{data.pictures.length}
        </p>
        <div
          className={
            data.pictures.length > 1
              ? "containerGallery_navButtons"
              : "containerGallery_navButtons--disabled"
          }
        >
          <picture
            onClick={() =>
              indexGallery > 0
                ? setIndexGallery(indexGallery - 1)
                : setIndexGallery(data.pictures.length - 1)
            }
          >
            <img
              src="./img/gallery-arrow-icon.png"
              alt="left button"
              className="navButtons--left"
            />
          </picture>
          <picture
            onClick={() =>
              indexGallery < data.pictures.length - 1
                ? setIndexGallery(indexGallery + 1)
                : setIndexGallery(0)
            }
          >
            <img
              src="./img/gallery-arrow-icon.png"
              alt="right button"
              className="navButtons--right"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default LodgingGallery;
