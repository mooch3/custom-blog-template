import classes from "./Carousel.module.css";
import Buttons from "../Buttons/buttons";
import Tile from "../../Tile/Tile";

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
          <Tile
            image={tile.image}
            title={tile.title}
            category={tile.category}
            key={tile.id}
            id={tile.id}
            date={tile.date}
            carousel={true}
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
