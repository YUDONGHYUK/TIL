import { useState } from 'react';

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const fetchCommets = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json', // json 파일을 전송하기 때문에 설정.
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit comment</button>
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
