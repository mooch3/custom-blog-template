import classes from "./Logo.module.css";

const Logo = ({ style }) => {
  return (
    <div className={classes.logo} style={style}>
      <h1>Dear Juna</h1>
    </div>
  );
};

export default Logo;
