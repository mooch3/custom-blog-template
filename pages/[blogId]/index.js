import { useEffect, useState } from "react";
import BlogDetail from "../../components/blogs/BlogDetail";
import CommentForm from "../../components/forms/CommentForm";
import Comment from "../../components/comments/Comment";
import Card from "../../components/ui/Card";
import sanityClient from "../../client/client";

const BlogDetails = ({ post }) => {
  // pull selected post from params then render to page
  // use staticProps and Paths to achieve this with Sanity


  const onAddComment = (comment) => {
    fetch("/api/create-comment", {
      method: "POST",
      body: JSON.stringify({ ...comment }),
      type: "application/json",
    });
  };

  return (
    <>
      <BlogDetail
        category={post.category.toUpperCase()}
        image={post.image}
        title={post.title}
        content={post.content}
        date={`${new Date(post.date).getMonth()} / ${new Date(
          post.date
        ).getUTCDate()} / ${new Date(post.date).getFullYear()}`}
      />
      <Card>
        <h5>Comments</h5>
        {post.comments.length === 0 ? (
          <h5>Be the first to comment</h5>
        ) : (
          post.comments.map((comment) => (
            <Comment
              key={comment._id}
              name={comment.name}
              comment={comment.text}
              date={comment._createdAt}
            />
          ))
        )}
      </Card>

      <Card>
        <CommentForm _id={post._id} addComment={onAddComment} />
      </Card>
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
      mainImage{
        asset->{
          _id,
          url
         }
       },
     body,
     "comments": *[_type == "comment" && post._ref == ^._id] {
       name,
       text,
       _createdAt,
       _id
     },
    "name": author->name,
    "authorImage": author->image
   }`,
    { blogId }
  );

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
        comments: post.comments.sort((a, b) => a._createdAt - b._createdAt),
      },
    },
    revalidate: 1
  };
};

export default BlogDetails;
