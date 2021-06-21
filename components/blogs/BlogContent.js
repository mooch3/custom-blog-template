import classes from "./BlogContent.module.css";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from '../../client/client';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source)
}

const BlogContent = ({ category, title, date, content, image}) => {
  return (
    <>
      <div className={classes.header}>
        <h2>-{category}-</h2>
        <h1>{title}</h1>
        <h2>{date}</h2>
      </div>
      <div className={classes.content}>
      <img src={image} alt="Photo of baby scrunching face." />
        <BlockContent
          blocks={content}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}

        />
      </div>
    </>
  );
};

export default BlogContent;
