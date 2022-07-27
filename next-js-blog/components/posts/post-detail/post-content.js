import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import styles from './post-content.module.css';

function PostContent({ post }) {
  return (
    <article className={styles.content}>
      <PostHeader
        title={post.title}
        image={`/images/posts/${post.slug}/${post.image}`}
      />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
