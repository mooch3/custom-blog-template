import classes from "./Comment.module.css";

const Comment = ({ name, date, comment }) => {
  return (
    <div className={classes.comment}>
      <p>{name} says</p>
      <p className={classes.date}>
        {`${new Date(date).getMonth()} / ${new Date(
          date
        ).getUTCDate()} / ${new Date(date).getFullYear()}`}
      </p>
      <pre>{comment}</pre>
    </div>
  );
};

export default Comment;
