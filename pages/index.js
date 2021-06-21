import sanityClient from "../client/client";
import Head from "next/head";
import FeaturedGrid from "../components/about/FeaturedGrid";
import Tile from "../components/Tile/Tile";
import TileGrid from "../components/Tile/TileGrid";
import CarouselContainer from "../components/ui/Carousel/CarouselContainer";
import BlocksToText from "../helpers/blocksToText";
import Break from "../components/ui/break/Break";

export default function Home({ allPosts, featuredPost, aboutMeData }) {
  return (
    <>
      <Head>
        <title>Dear Juna</title>
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
        date: `${new Date(post.publishedAt).getMonth()} / ${new Date(
          post.publishedAt
        ).getUTCDate()} / ${new Date(post.publishedAt).getFullYear()}`,
      })),
      featuredPost: {
        title: featuredPost.title,
        content: BlocksToText(featuredPost.body).substring(0, 200),
        author: featuredPost.authorName,
        comments: 0,
        id: featuredPost.slug.current,
        image: featuredPost.mainImage.asset.url,
      },
      aboutMeData: {
        aboutMeImage: aboutMeData[0].mainImage.asset.url,
        aboutMe: aboutMeData[0].aboutMe,
      },
    },
    revalidate: 1,
  };
};
