import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-utils';

function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All My Posts</title>
        <meta
          name='description'
          content='A list of all programming-related posts!'
        />
      </Head>
      <AllPosts posts={posts} />;
    </>
  );
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
