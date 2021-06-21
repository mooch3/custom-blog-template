import React, { useEffect, useState } from "react";
import classes from "./Carousel.module.css";
import Buttons from "../Buttons/buttons";
import SliderTile from "../../Tile/SliderTile";

const Carousel = ({ tiles, xposition, handleClickPrev, handleClickNext, image }) => {
  const styles = {
    transform: `translateX(${xposition}px)`,
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.slide}
        style={styles}
        xposition={xposition}
      >
        {tiles.map((tile) => (
          <SliderTile
            image={tile.image}
            title={tile.title}
            category={tile.category}
            key={tile.id}
            id={tile.id}
            date={tile.date}
          />
        ))}
      </div>
      <Buttons
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
      />
    </div>
  );
};

export default Carousel;
