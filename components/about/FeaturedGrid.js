import classes from "./FeaturedGrid.module.css";
import About from "./About";
import FeaturedPost from "./FeaturedPost";


const FeaturedGrid = (props) => {

  return (
    <div className={classes.featured}>

        <FeaturedPost
          title={props.title}
          content={props.content}
          author={props.author}
          comments={props.comments}
          id={props.id}
        />
      <About />
    </div>
  );
};

export default FeaturedGrid;
