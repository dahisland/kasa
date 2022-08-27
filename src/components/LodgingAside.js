import React from "react";

const LodgingAside = ({ data }) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <aside className="lodgingInfos_asideLodging">
      <ul className="asideLodging_tags">
        {data.tags.map((tag, index) => (
          <li key={data.id + "-" + tag + "-" + index}>{tag}</li>
        ))}
      </ul>
      <ul className="asideLodging_rating">
        {range.map((el, index) =>
          el <= data.rating ? (
            <li key={data.id + "-ratingOn-" + index}>
              <img
                src="./img/star-orange.svg"
                alt={"rating " + (index + 1)}
              ></img>
            </li>
          ) : (
            <li key={data.id + "-ratingOff-" + index}>
              <img src="./img/star-grey.svg" alt={"rating " + index}></img>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};

export default LodgingAside;
