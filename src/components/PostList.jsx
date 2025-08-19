import PostCard from './PostCard';
import styles from './PostList.module.css';

function PostList({ posts }) {
  return (
    <div className={styles.HomeLayout_main}>
      <main>
        <ul className={`${styles.PostCardGrid} ${styles.Grid}`}>
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