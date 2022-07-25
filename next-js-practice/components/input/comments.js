import { useState } from 'react';
import CommentList from './comment-list';
import NewComment from './new-comment';
import styles from './comments.module.css';

function Comments({ eventId }) {
  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevState) => !prevState);
  }

  function addCommentHandler(commentData) {
    // send data to API
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}

export default Comments;
