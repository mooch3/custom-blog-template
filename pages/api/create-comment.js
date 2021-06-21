import sanityClient from "../../client/client";

export default async function createComment(req, res) {
  const { name, email, _id, text } = JSON.parse(req.body);

  console.log(name, text, _id, email);

  sanityClient.config({
    token: process.env.SANITY_API_TOKEN,
  }).create({
    _type: "comment",
    name,
    text,
    post: {
      _type: "reference",
      _ref: _id,
    },
  });
}
