import sanityClient from "./api/client";
import Head from "next/head";
import FeaturedGrid from "../components/about/FeaturedGrid";
import Tile from "../components/Tile/Tile";
import TileGrid from "../components/Tile/TileGrid";
import CarouselContainer from "../components/ui/Carousel/CarouselContainer";
import BlocksToText from "../helpers/blocksToText";
import Break from "../components/ui/break/Break";
import DateFormat from "../helpers/dateFormat";
import Footer from '../components/ui/footer/Footer';


export default function Home({ allPosts, featuredPost, aboutMeData }) {
  // TODO: When there is more content in the db slice the allPosts data to just show most recent 5 posts
  return (
    <>
      <Head>
        <title>Dear Juna</title>
        <meta name="description" content="A blog about being a young parent, taking care of a new baby, and understanding how one fits into the world." />
      </Head>
      <CarouselContainer posts={allPosts} />
      <Break />
      <FeaturedGrid
        title={featuredPost.title}
        content={featuredPost.content}
        author={featuredPost.author}
        comments={featuredPost.comments}
        id={featuredPost.id}
        image={featuredPost.image}
        aboutMeImage={aboutMeData.aboutMeImage}
        aboutMe={aboutMeData.aboutMe}
      />
      <Break />
      <TileGrid>
        {allPosts.map((post) => (
          <Tile
            title={post.title}
            image={post.image}
            category={post.category}
            key={post.id}
            id={post.id}
            date={post.date}
          />
        ))}
      </TileGrid>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const allPostsData = await sanityClient.fetch(
    `*[_type == "post"]{
    title,
    slug,
    publishedAt,
    category,
    authorName,
    body,
    "comments": *[_type == "comment" && references(^._id)],
    _id,
    mainImage{
      asset->{
        _id,
        url
      }
    },
  }`
  );

  const aboutMeData = await sanityClient.fetch(
    `*[_type == "about"] {
    slug,
    aboutMe,
    mainImage{
      asset->{
        _id,
        url
      }
    }
  }`
  );

  const featuredPost = allPostsData.reduce((a, b) => (a.date > b.date ? a : b));

  return {
    props: {
      allPosts: allPostsData.map((post) => ({
        title: post.title,
        image: post.mainImage.asset.url,
        category: post.category,
        id: post.slug.current,
        date: DateFormat(post.publishedAt),
      })),
      featuredPost: {
        title: featuredPost.title,
        content: BlocksToText(featuredPost.body).substring(0, 200),
        author: featuredPost.authorName,
        id: featuredPost.slug.current,
        _id: featuredPost._id,
        image: featuredPost.mainImage.asset.url,
        comments: featuredPost.comments.length,
      },
      aboutMeData: {
        aboutMeImage: aboutMeData[0].mainImage.asset.url,
        aboutMe: aboutMeData[0].aboutMe,
      },
    },
    revalidate: 1,
  };
};
