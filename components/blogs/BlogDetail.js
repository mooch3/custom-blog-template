import BlogImage from "./BlogImage";
import BlogContent from "./BlogContent";


const BlogDetail = (props) => {
  return (
    <>
      <BlogContent
        category={props.category}
        content={props.content}
        title={props.title}
        date={props.date}
      />
      <BlogImage image={props.image} />
    </>
  );
};

export default BlogDetail;
