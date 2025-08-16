import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import PostCard from './components/PostCard';
import { ReactComponent as Tranding } from './assets/tranding.svg';
import { ReactComponent as Recent } from './assets/recent.svg';
import { ReactComponent as Feed } from './assets/feed.svg';
import { ReactComponent as Downarrow } from './assets/downarror.svg';
import { ReactComponent as Kebab } from './assets/kebab.svg';
import './App.css';

function App() {
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
          imageUrl: post.posting_header_image_url
        }));
        setPosts(mapped);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App" data-theme="light">
      <div className='Content'>
        <div className='HomeLayout'>
          <Header></Header>
          <div className='HomeTab Header'>
            <nav className='HomeTab_left'>
              <div className='HomeTab_tab'>
                <NavTab to="/tranding/week" icon={Tranding} label="트렌딩" active />
                <NavTab to="/recent" icon={Recent} label="최신" />
                <NavTab to="/feed" icon={Feed} label="피드" />
                <div className="HomeTab_indicator HomeTab_first"></div>
              </div>
            </nav>
            <div className='HomeTab_right'>
              <div className='HomeTab_selector'>
                이번 주
                <Downarrow/>
              </div>
              <Kebab className='HomeTab_extra'/>
            </div>
          </div>
          <div className='HomeLayout_main'>
            <main>
              <ul className='PostCardGrid Grid'>
                {posts.map(post => (
                  <PostCard
                    post={post}
                  />
                ))}
              </ul>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavTab({ to, icon: Icon, label, active }) {
  return (
    <Link 
      className={active ? 'HomeTab_active' : ''} 
      to={to}
    >
      <Icon />
      <span>{label}</span>
    </Link>
  );
}

export default App;
