import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-utils';

function AllPostsPage({ posts }) {
  console.log(posts);
  return <AllPosts posts={posts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
