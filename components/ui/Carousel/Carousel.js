import React, { useEffect } from "react";
import classes from "./Carousel.module.css";
import Buttons from "../Buttons/buttons";
import SliderTile from "../../Tile/SliderTile";

const Carousel = ({
  tiles,
  setWidth,
  xposition,
  handleClickPrev,
  handleClickNext,
}) => {
  const transformStyle = {
    transform: `translateX(${xposition}px)`,
  };


  useEffect(() => {
    function handleResize() {
      const { innerWidth: windowWidth } = window;
      if (windowWidth <= 650) {
        console.log(windowWidth);
        const width = 350
        setWidth(width);
      }
      if (windowWidth > 650) {
        console.log(windowWidth);
        const width = 350 + 48;
        setWidth(width);
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);



  return (
    <div className={classes.container}>
      <div
        className={classes.slide}
        style={transformStyle}
        xposition={xposition}
      >
        {tiles.map((tile, i) => (
          <SliderTile
            title={tile.title}
            category={tile.category}
            key={tile.id}
            id={tile.id}
            date={`${tile.date.getMonth()} / ${tile.date.getUTCDate()} / ${tile.date.getFullYear()}`}
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
