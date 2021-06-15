import classes from "./About.module.css";
import AboutImage from "./AboutImage";
import AboutBanner from './AboutBanner';

const About = () => {
  return (
    <div className={classes.about}>
      <AboutImage />
      <AboutBanner />
    </div>
  );
};

export default About;
