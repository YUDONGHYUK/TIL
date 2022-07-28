import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import PostHeader from './post-header';
import styles from './post-content.module.css';

function PostContent({ post }) {
  const markdownComponents = {
    p: (paragraph) => {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader
        title={post.title}
        image={`/images/posts/${post.slug}/${post.image}`}
      />
      <ReactMarkdown components={markdownComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
