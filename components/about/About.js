import classes from "./About.module.css";
import AboutImage from "./AboutImage";
import AboutBanner from './AboutBanner';

const About = ({ aboutMeImage, aboutMe }) => {
  return (
    <div className={classes.about}>
      <AboutImage
        aboutMeImage={aboutMeImage}
      />
      <AboutBanner
        aboutMe={aboutMe}
      />
    </div>
  );
};

export default About;
