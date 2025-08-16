import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import './App.css';

function App() {
  return (
    <div className="App" data-theme="light">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:userid/:postid" element={<PostPage/>} />
      </Routes>
    </div>
  );
}

export default App;