import BlogImage from "../blogs/BlogImage";
import classes from "./FeaturedPost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import PrettyButton from "../ui/buttons/PrettyButton";

const FeaturedPost = (props) => {
  // const truncatedContent = `${props.content.substring(0, 200)}...`;

  const router = useRouter();

  const showPostHandler = () => {
    router.push(`/${props.id}`);
  };

  return (
    <div className={classes["featured-post"]}>
      <h1
        onClick={showPostHandler}
        className={`${classes.header} ${classes.click}`}
      >
        {props.title}
      </h1>
      <p
        onClick={showPostHandler}
        className={`${classes.author} ${classes.click}`}
      >
        BY: {props.author.toUpperCase()}{" "}
        <FontAwesomeIcon icon={faComments} color="#b8b9fc" /> {props.comments}{" "}
        COMMENTS
      </p>
      <div
        onClick={showPostHandler}
        className={`${classes.click} ${classes.image}`}
      >
        <BlogImage image={props.image} />
      </div>
      <div>
        <p className={classes.content}>{props.content}...</p>
      </div>
      <PrettyButton onClick={showPostHandler} type="button">
        Keep Reading...
      </PrettyButton>
    </div>
  );
};

export default FeaturedPost;
