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

let userid = 'place';
let username = 'PlaceHolder';
let postid = '1';
let title = '[2025년 최신판] 개발 비용 절감과 생산성 향상을 위한 오픈소스 대체 도구 15선';
let preview = '상용 툴을 대체할 수 있는 15개의 오픈소스 대안을 소개합니다. 비용 절감뿐만 아니라 자체 서버 운영과 높은 커스터마이징 등 많은 장점이 있습니다. 특히 Ollama, Hoppscotch, Bruno 같은 툴은 각 분야에서 높은 완성도를 자랑하며 개발 효율 향상에 기여...';
let date = '2025년 7월 31일';
let comment = '5';
let like = '100';

function App() {
  return (
    <div className="App" data-theme="light">
      <div className='Content'>
        <div className='HomeLayout'>
          <header className="Header">
            <div className='Header_inner'>
              <div className='Header_logo'>
                <a herf="/">
                  <Logo></Logo>
                </a>
              </div>
              <div className='Header_right'>
                <a className='Header_notification' herf="/notification">
                  <div className='Header_icon'>
                    <Notification></Notification>
                  </div>
                </a>
                <a className='Header_search' herf="/search">
                  <div className='Header_icon'>
                    <Search></Search>
                  </div>
                </a>
                <button className='RoundButton RoundButton_default RoundButton_notBorder RoundButton_darkGray Header_button'>로그인</button>
              </div>
            </div>
          </header>
          <div className='HomeTab Header'>
            <nav className='HomeTab_left'>
              <div className='HomeTab_tab'>
                <a className='HomeTab_active' href="/tranding/week">
                  <Tranding></Tranding>
                  <span>트렌딩</span>
                </a>
                <a href="/recent">
                  <Recent></Recent>
                  <span>최신</span>
                </a>
                <a href="/feed">
                  <Feed></Feed>
                  <span>피드</span>
                </a>
                <div className="HomeTab_indicator HomeTab_first"></div>
              </div>
            </nav>
            <div className='HomeTab_right'>
              <div className='HomeTab_selector'>
                이번 주
                <Downarrow></Downarrow>
              </div>
              <Kebab className='HomeTab_extra'></Kebab>
            </div>
          </div>
          <div className='HomeLayout_main'>
            <main>
              <ul className='PostCardGrid Grid'>
                <li className="PostCard">
                  <a href={`/@${userid}/${postid}`} className="VLink_block PostCard_styleLink">
                    <div className="RatioImage">
                      <img className="PostCard_postimage" alt={title} src={`/images/${userid}/post/${postid}/image.png`}/>
                    </div>
                  </a>
                  <div className="PostCard_content">
                    <a href={`/@${userid}/${postid}`} className="VLink_block PostCard_styleLink">
                      <h4 className="PostCard_h4 utils_ellipsis">{title}</h4>
                      <div className="PostCard_descriptionWrapper">
                        <p className="PostCard_clamp">{preview}</p>
                      </div>
                    </a>
                    <div className="PostCard_subInfo">
                      <span>{date}</span>
                      <span className="PostCard_separator">·</span>
                      <span>{comment}개의 댓글</span>
                    </div>
                  </div>
                  <div className="PostCard_footer">
                    <a className="PostCard_userInfo" href={`/@${userid}/posts`}>
                      <img className="PostCard_profile" alt={`user thumbnail of ${username}`} width="24" height="24" src={`./images/${userid}/profile/image.png`}/>
                      <span>by <b>{username}</b></span>
                    </a>
                    <div className="PostCard_likes">
                      <Like></Like>
                      {like}
                      </div>
                    </div>
                  </li>
              </ul>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;