import classes from "./BlogContent.module.css";

const BlogContent = (props) => {
  return (
    <>
      <div className={classes.header}>
        <h2>-{props.category}-</h2>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
      </div>
      <div className={classes.content}>
        <p>{props.content}</p>
      </div>
    </>
  );
};

export default BlogContent;
