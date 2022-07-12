import { useState } from 'react';

function CommentsPage() {
  const [comments, setComments] = useState([]);

  const fetchCommets = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };

  return (
    <>
      <button onClick={fetchCommets}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comments.id} {comment.text}
          </div>
        );
      })}
    </>
  );
}

export default CommentsPage;
