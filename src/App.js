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
                <PostCard
                  userid={'place'}
                  username={'PlaceHolder'}
                  postid={'1'}
                  title={'[2025년 최신판] 개발 비용 절감과 생산성 향상을 위한 오픈소스 대체 도구 15선'}
                  preview={'상용 툴을 대체할 수 있는 15개의 오픈소스 대안을 소개합니다. 비용 절감뿐만 아니라 자체 서버 운영과 높은 커스터마이징 등 많은 장점이 있습니다. 특히 Ollama, Hoppscotch, Bruno 같은 툴은 각 분야에서 높은 완성도를 자랑하며 개발 효율 향상에 기여...'}
                  date={'2025년 7월 31일'}
                  comment={'5'}
                  like={'100'}
                />
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

function PostCard({ userid, username, postid, title, preview, date, comment, like }) {
  return (
    <li className="PostCard">
      <Link to={`/@${userid}/${postid}`} className="VLink_block PostCard_styleLink">
        <div className="RatioImage">
          <img className="PostCard_postimage" alt={title} src={`/images/${userid}/post/${postid}/image.png`} />
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
          <img className="PostCard_profile" alt={`user thumbnail of ${username}`} width="24" height="24" src={`./images/${userid}/profile/image.png`} />
          <span>by <b>{username}</b></span>
        </Link>
        <div className="PostCard_likes">
          <Like />
          {like}
        </div>
      </div>
    </li>
  );
}

export default App;
