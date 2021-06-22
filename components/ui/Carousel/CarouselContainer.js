import { useEffect, useState } from "react";
import classes from "./CarouselContainer.module.css";
import Carousel from "./Carousel";

const CarouselContainer = ({ posts, image }) => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(350);
  const [isMobile, setIsMobile] = useState(false);
  const [xposition, setXPosition] = useState(159);

  const handleClickPrev = () => {
    if (index === 0) {
      return;
    }
    if (!isMobile) {
      setIndex((prevState) => prevState - 1);
      setXPosition((prevState) => prevState + 382);
    }
    if (isMobile) {
      setIndex((prevState) => prevState - 1);
      setXPosition((prevState) => prevState + 350);
    }
  };

  const handleClickNext = () => {
    if (index === posts.length - 1) {
      setIndex(0);
      if (isMobile) {
        setXPosition(0);
      } else {
        setXPosition(159);
      }
    } else {
      if (!isMobile) {
        setIndex((prevState) => prevState + 1);
        setXPosition((prevState) => prevState - 382);
      }
      if (isMobile) {
        setIndex((prevState) => prevState + 1);
        setXPosition((prevState) => prevState - 350);
      }
    }
  };
  
  useEffect(() => {
    const handleAutoPlay = setInterval(handleClickNext, 3000);

    return () => {
      clearInterval(handleAutoPlay);
    };
  }, [handleClickNext]);

  useEffect(() => {
    const initialWidth = 382;

    function handleResize() {
      const { innerWidth: windowWidth } = window;
      if (windowWidth <= 650) {
        setXPosition(0);
        setIsMobile(true);
        setWidth(initialWidth);
      }
      if (windowWidth > 650) {
        setXPosition(159);
        setIsMobile(false);
        setWidth(initialWidth);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [isMobile]);

  return (
    <>
      <div className={classes.container}>
        <Carousel
          tiles={posts}
          xposition={xposition}
          handleClickNext={handleClickNext}
          handleClickPrev={handleClickPrev}
          image={image}
        />
      </div>
    </>
  );
};

export default CarouselContainer;
