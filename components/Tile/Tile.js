import { useRouter } from "next/router";
import classes from "./Tile.module.css";
import TileInfo from "./TileInfo";

const Tile = ({ carousel, image, category, title, date, id }) => {
  const router = useRouter();

  const showPostHandler = () => {
    router.push(`/${id}`);
  };

  return (
    <div
      onClick={showPostHandler}
      className={carousel ? classes["slider-tile"] : classes.tile}
      style={{ backgroundImage: `url(${image})` }}
    >
      <TileInfo
        category={category}
        title={title}
        date={date}
      />
    </div>
  );
};

export default Tile;
