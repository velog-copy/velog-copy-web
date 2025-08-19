import { Link, useLocation, useParams } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Notification } from '../assets/notification.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import gstyles from '../index.module.css';
import styles from './Header.module.css';

function HeaderIcon({ to, icon: Icon, className }) {
  return (
    <Link className={className} to={to}>
      <div className={styles.Header_icon}>
        <Icon />
      </div>
    </Link>
  );
}

function Header(){
  const location = useLocation();
  const isHome = location.pathname === "/";
  const {userid, postid} = useParams();
  return (
      <header className={styles.Header}>
        <div className={styles.Header_inner}>
          <div className={styles.Header_logo}>
            <Link to={`/${userid}/posts`}>
              {isHome ? <Logo/> : <span className={styles.Header_text}>{userid.slice(1)}</span>}
            </Link>
          </div>
          <div className={styles.Header_right}>
            <HeaderIcon
              to="/notification"
              icon={Notification}
              className={styles.Header_notification}
            />
            <HeaderIcon
              to="/search"
              icon={Search}
              className={styles.Header_search}
            />
            <button className={`${gstyles.RoundButton} ${gstyles.RoundButton_default} ${gstyles.RoundButton_notBorder} ${gstyles.RoundButton_darkGray} ${styles.Header_button}`}>로그인</button>
          </div>
        </div>
      </header>
  );
}

export default Header;