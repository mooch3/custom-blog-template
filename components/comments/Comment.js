import classes from "./Comment.module.css";
import DateFormat from "../../helpers/dateFormat";

const Comment = ({ name, date, comment }) => {
  return (
    <div className={classes.comment}>
      <p>{name} says</p>
      <p className={classes.date}>
        {DateFormat(date)}
      </p>
      <pre>{comment}</pre>
    </div>
  );
};

export default Comment;
