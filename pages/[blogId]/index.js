import { useEffect, useState } from "react";
import BlogDetail from "../../components/blogs/BlogDetail";
import CommentForm from "../../components/forms/CommentForm";
import Comment from "../../components/comments/Comment";
import Card from "../../components/ui/Card";
import sanityClient from "../api/client";
import useSanityListener from "../../hooks/use-sanity-listener";
import DateFormat from "../../helpers/dateFormat";
import Break from "../../components/ui/break/Break";
import LoadingSpinner from "../../components/ui/loading-spinner/LoadingSpinner";
import Footer from "../../components/ui/footer/Footer";
import Head from "next/head";

const BlogDetails = ({ post }) => {
  // pull selected post from params then render to page
  // use staticProps and Paths to achieve this with Sanity
  const { _id } = post;

  const { comments } = useSanityListener(sanityClient, _id);

  const [postComments, setPostComments] = useState(null);

  useEffect(() => {
    setPostComments(comments);

    return () => {
      setPostComments([]);
    };
  }, [comments]);

  const onAddComment = (comment) => {
    fetch("/api/create-comment", {
      method: "POST",
      body: JSON.stringify({ ...comment }),
      type: "application/json",
    });
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta property="og:image" content={post.mainImage} key="ogimage" />
        <meta property="og:title" content={post.title} key="ogtitle" />
        <meta property="og:description" content={post.description} key="ogdesc" />
      </Head>
      <BlogDetail
        category={post.category.toUpperCase()}
        image={post.image}
        title={post.title}
        content={post.content}
        date={DateFormat(post.date)}
      />
      <Card>
        <Break />
        <h5>Comments</h5>
        {postComments === null && <LoadingSpinner />}
        {postComments && postComments.length === 0 && (
          <h5>Be the first to comment.</h5>
        )}

        {postComments &&
          postComments.length > 0 &&
          postComments.map((comment) => (
            <Comment
              key={comment._id}
              name={comment.name}
              comment={comment.text}
              date={comment._createdAt}
            />
          ))}
      </Card>

      <Card>
        <CommentForm _id={post._id} addComment={onAddComment} />
      </Card>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const getPaths = await sanityClient.fetch(
    `*[_type == "post"]{
      slug
    }`
  );

  return {
    fallback: "blocking",
    paths: getPaths.map((path) => ({
      params: { blogId: path.slug.current },
    })),
  };
};

export const getStaticProps = async (context) => {
  const blogId = context.params.blogId;

  const getPost = await sanityClient.fetch(
    `*[slug.current == $blogId]{
      title,
      slug,
      category,
      _id,
      publishedAt,
      description,
      mainImage{
        asset->{
          _id,
          url
         }
       },
     body,
    "name": author->name,
    "authorImage": author->image
   }`,
    { blogId }
  );

  if (getPost.length === 0) {
    return {
      notFound: true,
    };
  }

  const post = getPost.shift();

  return {
    props: {
      post: {
        title: post.title,
        slug: post.slug.current,
        date: post.publishedAt,
        image: post.mainImage.asset.url,
        content: post.body,
        category: post.category,
        _id: post._id,
        description: post.description,
      },
    },
    revalidate: 1,
  };
};

export default BlogDetails;
