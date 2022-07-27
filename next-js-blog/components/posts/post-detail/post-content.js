import PostHeader from './post-header';
import styles from './post-content.module.css';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  content: '# This is a first post',
};

function PostContent() {
  return (
    <article className={styles.content}>
      <PostHeader
        title={DUMMY_POST.title}
        image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`}
      />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
