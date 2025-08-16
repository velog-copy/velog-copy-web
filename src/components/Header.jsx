import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Notification } from '../assets/notification.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { Link } from 'react-router-dom';
import './Header.css';

function HeaderIcon({ to, icon: Icon, className }) {
  return (
    <Link className={className} to={to}>
      <div className="Header_icon">
        <Icon />
      </div>
    </Link>
  );
}

function Header(){
    return (
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
    );
}

export default Header;