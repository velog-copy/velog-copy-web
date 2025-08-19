import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { ReactComponent as Like } from '../assets/like.svg';
import { ReactComponent as Share } from '../assets/share.svg';

function PostPage() {
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
        <Pagehead />
        {/*<PageContents />*/}
      </div>
    </div>
  );
}

function Pagehead() {
  return (
    <div className='head-wrapper'>
      <h1>title</h1>
      <div className='HeadInfo'>
        <div className='information'>
          <span className='username'><a href="" className='HeadUsername'></a></span>
        </div>
        <span className='separator'>·</span>
        <span></span>
      </div>
      <div className='Buttons'>
        <div className='Follow'>
          <button className='FollowButton'>
            <span>팔로우</span>
          </button>
        </div>
      </div>
      <div className='Tags'>
        <a className='Tag' href=''>Test</a>
      </div>
      <div className='Sidebar'>
        <div className='Side'>
          <div className='SideIn'>
            <div className='Likebtn'>
              <Like></Like>
            </div>
            <div className='Likenum'></div>
            <div className='Sharebtn'>
              <Share></Share>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;