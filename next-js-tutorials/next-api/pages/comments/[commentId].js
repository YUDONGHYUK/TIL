import { comments } from '../../data/comments';

function Comment({ comment }) {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
}

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: '1' } },
      { params: { commentId: '2' } },
      { params: { commentId: '3' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);

  /** Don't do this
    const response = await fetch(`/api/comments/${commentId}`);
    const data = await response.json();
    
    # getStaticProps 또는 getServerSideProps 내에서 자신의 API route를 호출하지 않는 것이 좋다.
    # URL을 통해 호출하면 필요하지 않는 추가 여행비용이 발생한다.
    # 이미 사용 가능한 데이터가 있으므로 getStaticProps 자체 내에서 동일한 로직을 복제할 수 있다
    # 요청을 만드는 왕복을 피할 수 있는 코드는 적어도 100ms의 시간을 절약할 수 있다.
   */

  return {
    props: { comment },
  };
}
