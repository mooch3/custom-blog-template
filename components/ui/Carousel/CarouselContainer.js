import { useEffect, useState } from "react";
import classes from "./CarouselContainer.module.css";
import Carousel from "./Carousel";
import { useRouter } from "next/router";

// const images = ["https://upload.wikimedia.org/wikipedia/commons/e/ea/Altstadt_Heidelberg.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mount_Rainier_overlooking_the_Port_of_Tacoma.jpg/2560px-Mount_Rainier_overlooking_the_Port_of_Tacoma.jpg", "https://upload.wikimedia.org/wikipedia/commons/e/ea/Altstadt_Heidelberg.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mount_Rainier_overlooking_the_Port_of_Tacoma.jpg/2560px-Mount_Rainier_overlooking_the_Port_of_Tacoma.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mount_Rainier_overlooking_the_Port_of_Tacoma.jpg/2560px-Mount_Rainier_overlooking_the_Port_of_Tacoma.jpg" ];
const DUMMY_DATA = [
  {
    title: "Juna",
    category: "parenting",
    date: new Date(2021, 5, 23),
    id: "p1",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    title: "Mowgli",
    category: "owning pets",
    date: new Date(2020, 1, 12),
    id: "p2",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    title: "School",
    category: "work",
    date: new Date(2019, 8, 9),
    id: "p3",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    title: "When your baby does not sleep",
    category: "parenting",
    date: new Date(2019, 8, 9),
    id: "p4",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
];

const CarouselContainer = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [xposition, setXPosition] = useState(199);

  const router = useRouter();

  const handleClickPrev = () => {
    if (index === 0) {
      return;
    }
    setIndex((prevState) => prevState - 1);
    setXPosition((prevState) => prevState + width);
  };

  const handleClickNext = () => {
    if (index === DUMMY_DATA.length - 1) {
      setIndex(0);
      if (isMobile) {
        setXPosition(0);
      } else {
        setXPosition(199);
      }
    } else {
      setIndex((prevState) => prevState + 1);
      setXPosition((prevState) => prevState - width);
    }
  };

  useEffect(() => {
    function handleResize() {
      const { innerWidth: windowWidth } = window;
      if (windowWidth <= 650) {
        setXPosition(0);
        setIsMobile(true);
      }
      if (windowWidth > 650) {
        setXPosition(199);
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    const handleAutoPlay = setInterval(handleClickNext, 3000);
    return () => clearInterval(handleAutoPlay);
  }, [handleClickNext]);

  return (
    <div className={classes.container}>
      <Carousel
        tiles={DUMMY_DATA}
        setWidth={setWidth}
        xposition={xposition}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
      />
    </div>
  );
};

export default CarouselContainer;
