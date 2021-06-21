import classes from "./FeaturedGrid.module.css";
import About from "./About";
import FeaturedPost from "./FeaturedPost";


const FeaturedGrid = ({ title, content, author, comments, id, image, aboutMe, aboutMeImage }) => {

  return (
    <div className={classes.featured}>

        <FeaturedPost
          title={title}
          content={content}
          author={author}
          comments={comments}
          id={id}
          image={image}
        />
      <About
        aboutMe={aboutMe}
        aboutMeImage={aboutMeImage}
      />
    </div>
  );
};

export default FeaturedGrid;
