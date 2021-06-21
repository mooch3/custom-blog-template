import classes from "./AboutImage.module.css";

const AboutImage = ({ aboutMeImage }) => {
  return (
    <div className={classes.image}>
      <img
        src={aboutMeImage}
        alt="image of book"
      />
    </div>
  );
};

export default AboutImage;
