import { Link } from 'react-router-dom';
import { ReactComponent as Tranding } from '../assets/tranding.svg';
import { ReactComponent as Recent } from '../assets/recent.svg';
import { ReactComponent as Feed } from '../assets/feed.svg';
import { ReactComponent as Downarrow } from '../assets/downarror.svg';
import { ReactComponent as Kebab } from '../assets/kebab.svg';
import './HomeTab.css';

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

function HomeTab() {
  return (
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
  );
}

export default HomeTab;