import classes from './BlogImage.module.css';

const BlogImage = (props) => {
  return (
    <div className={classes['blog-image']}>
      <img src={props.image} />
    </div>
  );
};

export default BlogImage;
