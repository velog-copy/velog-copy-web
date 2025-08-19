import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ReactMarkdown from "react-markdown";
import { ReactComponent as Like } from '../assets/like.svg';
import { ReactComponent as Share } from '../assets/share.svg';
import './PostPage.css';

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
        <PageContents />
      </div>
    </div>
  );
}

function Pagehead() {
  return (
    <div className='Pagehead'>
      <div className='head-wrapper'>
        <h1>title</h1>
        <div className='HeadInfo'>
          <div className='information'>
            <span className='username'><a href="" className='HeadUsername'>ASDF</a></span>
            <span className='separator'>·</span>
            <span>2025년 8월 10일</span>
          </div>
          <div className='Buttons'>
            <div className='Follow'>
              <button className='FollowButton button'>
                <span>팔로우</span>
              </button>
            </div>
          </div>
        </div>
        <div className='Tags'>
          <a className='Tag' href=''>Test</a>
        </div>
        <div className='Sidebar'>
          <div className='Side'>
            <div className='SideIn'>
              <div className='SideBtn'>
                <Like className='like'></Like>
              </div>
              <div className='Likenum'>0</div>
              <div className='SideBtn'>
                <Share className='share'></Share>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageContents() {
  return (
    <div className='PageContents'>
      <div className='PageContent'>
        <div>
          <ReactMarkdown>Place</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default PostPage;