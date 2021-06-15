import classes from "./AboutImage.module.css";

const AboutImage = () => {
  return (
    <div className={classes.image}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mount_Rainier_overlooking_the_Port_of_Tacoma.jpg/2560px-Mount_Rainier_overlooking_the_Port_of_Tacoma.jpg"
        alt="image of book"
      />
    </div>
  );
};

export default AboutImage;
