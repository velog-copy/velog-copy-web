import { Link } from 'react-router-dom';
import { ReactComponent as Tranding } from '../assets/tranding.svg';
import { ReactComponent as Recent } from '../assets/recent.svg';
import { ReactComponent as Feed } from '../assets/feed.svg';
import { ReactComponent as Downarrow } from '../assets/downarror.svg';
import { ReactComponent as Kebab } from '../assets/kebab.svg';
import styles from './HomeTab.module.css';

function NavTab({ to, icon: Icon, label, active }) {
  return (
    <Link 
      className={active ? styles.HomeTab_active : ''} 
      to={to}
    >
      <Icon />
      <span>{label}</span>
    </Link>
  );
}

function HomeTab() {
  return (
    <div className={`${styles.HomeTab} ${styles.Header}`}>
      <nav className={styles.HomeTab_left}>
        <div className={styles.HomeTab_tab}>
          <NavTab to="/tranding/week" icon={Tranding} label="트렌딩" active />
          <NavTab to="/recent" icon={Recent} label="최신" />
          <NavTab to="/feed" icon={Feed} label="피드" />
          <div className={`${styles.HomeTab_indicator} ${styles.HomeTab_first}`}></div>
        </div>
      </nav>
      <div className={styles.HomeTab_right}>
        <div className={styles.HomeTab_selector}>
          이번 주
          <Downarrow/>
        </div>
        <Kebab className={styles.HomeTab_extra}/>
      </div>
    </div>
  );
}

export default HomeTab;