import BlogContent from "./BlogContent";


const BlogDetail = ({ image, category, content, date, title }) => {
  return (
    <>
      <BlogContent
        category={category}
        content={content}
        title={title}
        date={date}
        image={image}
      />
    </>
  );
};

export default BlogDetail;
