import BlogDetail from "../../components/blogs/BlogDetail";
import { useRouter } from 'next/router';

const DUMMY_DATA = [
  {
    title: "Juna",
    category: "parenting",
    date: new Date(2021, 5, 23),
    id: "p1",
    image: "https://picsum.photos/400/400",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    title: "Mowgli",
    category: "owning pets",
    date: new Date(2020, 1, 12),
    id: "p2",
    image: "https://picsum.photos/400/400",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    title: "School",
    category: "work",
    date: new Date(2019, 8, 9),
    id: "p3",
    image: "https://picsum.photos/400/400",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    title: "When your baby does not sleep",
    category: "parenting",
    date: new Date(2019, 8, 9),
    id: "p4",
    image: "https://picsum.photos/400/400",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
];

const BlogDetails = (props) => {
    // pull selected post from params then render to page 
    // use staticProps and Paths to achieve this with Sanity
    const router = useRouter();
    const selectedPost = router.query.blogId;

    const selectedBlog = DUMMY_DATA.filter(blog => blog.id === selectedPost);

  return (
    <>
      <BlogDetail
        category={selectedBlog[0].category.toUpperCase()}
        image={selectedBlog[0].image}
        title={selectedBlog[0].title}
        content={selectedBlog[0].content}
        date={`${selectedBlog[0].date.getMonth()} / ${selectedBlog[0].date.getUTCDate()} / ${selectedBlog[0].date.getFullYear()}`}
      />
    </>
  );
};

// export const getStaticPaths = () => {
//     return {
//         fallback: false,
//         paths: DUMMY_DATA.map((blog) => ({
//             params: { blogId: blog.id}
//         }))
//     }
// }

// export const getStaticProps = (context) => {
//   const blogId = context.params.id;

//   const selectedBlog = DUMMY_DATA.filter((blog) => blog.id === blogId);
//   return {
//     props: {
//       blogData: {
//         image: selectedBlog[0].image,
//         title: selectedBlog[0].title,
//         content: selectedBlog[0].content,
//         date: selectedBlog[0].date,
//       },
//     },
//   };
// };

export default BlogDetails;
