import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes["lds-ring"]}>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;