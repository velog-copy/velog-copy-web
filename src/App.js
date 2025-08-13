import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Notification } from './notification.svg';
import { ReactComponent as Search } from './search.svg';
import './App.css';

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
        </div>
      </div>
    </div>
  );
}

export default App;