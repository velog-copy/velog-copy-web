import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HomeTab from '../components/HomeTab';
import PostList from '../components/PostList';
import styles from './HomePage.module.css';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://port-0-velog-copy-server-me9tpg0m0c115b1c.sel5.cloudtype.app/posting')
      .then(res => res.json())
      .then(data => {
        const mapped = data.map(post => ({
          userid: 'Placeholder',
          username: '익명',
          postid: post.posting_id,
          title: post.posting_title,
          preview: post.posting_preview,
          date: new Date(post.posting_datetime).toLocaleDateString('ko-KR'),
          comment: post.comment_count,
          like: post.like_count,
          imageid: post.posting_header_image_id
        }));
        setPosts(mapped);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='Content'>
      <div className='HomeLayout'>
        <Header />
        <HomeTab />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default HomePage;