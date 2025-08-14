import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Notification } from './notification.svg';
import { ReactComponent as Search } from './search.svg';
import { ReactComponent as Tranding } from './tranding.svg';
import { ReactComponent as Recent } from './recent.svg';
import { ReactComponent as Feed } from './feed.svg';
import { ReactComponent as Downarrow } from './downarror.svg';
import { ReactComponent as Kebab } from './kebab.svg';
import { ReactComponent as Like } from './like.svg';
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
          <header className="Header">
            <div className='Header_inner'>
              <div className='Header_logo'>
                <Link to="/">
                  <Logo/>
                </Link>
              </div>
              <div className='Header_right'>
                <HeaderIcon
                  to="/notification"
                  icon={Notification}
                  className="Header_notification"
                />
                <HeaderIcon
                  to="/search"
                  icon={Search}
                  className="Header_search"
                />
                <button className='RoundButton RoundButton_default RoundButton_notBorder RoundButton_darkGray Header_button'>로그인</button>
              </div>
            </div>
          </header>
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
                    key={post.postid}
                    userid={post.userid}
                    username={post.username}
                    postid={post.postid}
                    title={post.title}
                    preview={post.preview}
                    date={post.date}
                    comment={post.comment}
                    like={post.like}
                    imageurl={post.imageUrl}
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

function HeaderIcon({ to, icon: Icon, className }) {
  return (
    <Link className={className} to={to}>
      <div className="Header_icon">
        <Icon />
      </div>
    </Link>
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

function PostCard({ userid, username, postid, title, preview, date, comment, like, imageurl }) {
  return (
    <li className="PostCard">
      <Link to={`/@${userid}/${postid}`} className="VLink_block PostCard_styleLink">
        <div className="RatioImage">
          <img className="PostCard_postimage" alt={title} src={`https://port-0-velog-copy-server-me9tpg0m0c115b1c.sel5.cloudtype.app${imageurl}`} />
        </div>
      </Link>
      <div className="PostCard_content">
        <Link to={`/@${userid}/${postid}`} className="VLink_block PostCard_styleLink">
          <h4 className="PostCard_h4 utils_ellipsis">{title}</h4>
          <div className="PostCard_descriptionWrapper">
            <p className="PostCard_clamp">{preview}</p>
          </div>
        </Link>
        <div className="PostCard_subInfo">
          <span>{date}</span>
          <span className="PostCard_separator">·</span>
          <span>{comment}개의 댓글</span>
        </div>
      </div>
      <div className="PostCard_footer">
        <Link className="PostCard_userInfo" to={`/@${userid}/posts`}>
          <img className="PostCard_profile" alt={`user thumbnail of ${username}`} width="24" height="24" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2U-ph9IB1vinG_bVi_ATa7EjXPRVq4k8e2oYkQf4CUa40XxwoWELKLdvPM77E_3lI4A&usqp=CAU`} />
          <span>by <b>{username}</b></span>
        </Link>
        <div className="PostCard_likes">
          <Like/>
          {like}
        </div>
      </div>
    </li>
  );
}

export default App;
