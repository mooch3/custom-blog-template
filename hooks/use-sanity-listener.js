import { useEffect, useState } from "react";

const useSanityListener = (sanityClient, _id) => {
  const [comments, setComments] = useState([]);

  const query = `*[_type == "comment" && post._ref == $_id]`;
  const params = { _id };

  useEffect(() => {
    const subscription = sanityClient
      .listen(query, params)
      .subscribe(update => {
        console.log(JSON.stringify(update.result));
        const newComment = update.result;

        let allComments = [...comments, newComment];

        setComments(allComments);
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [sanityClient]);


  const fetchComments = async () => {
    const loadedComments = await sanityClient.fetch(query, params);
    setComments(loadedComments);
  };

  fetchComments();

  return { comments, setComments };
};

export default useSanityListener;
