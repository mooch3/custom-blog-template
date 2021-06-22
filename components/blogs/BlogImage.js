import classes from './BlogImage.module.css';

const BlogImage = ({ image }) => {
  return (
    <div className={classes['blog-image']}>
      <img src={image} />
    </div>
  );
};

export default BlogImage;
