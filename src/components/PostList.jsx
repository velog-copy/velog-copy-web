import PostCard from './PostCard';
import './PostList.css';

function PostList({ posts }) {
  return (
    <div className='HomeLayout_main'>
      <main>
        <ul className='PostCardGrid Grid'>
          {posts.map(post => (
            <PostCard
              key={post.postid}
              post={post}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default PostList;