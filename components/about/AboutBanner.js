import classes from "./AboutBanner.module.css";
import BlockContent from '@sanity/block-content-to-react'

const AboutBanner = ({ aboutMe }) => {
  return (
    <div className={classes.about}>
      <h4>Jenny Zisette</h4>
      <BlockContent 
        blocks={ aboutMe }
      />
    </div>
  );
};

export default AboutBanner;
