import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:userid/:postid" element={<PostPage/>} />
        <Route path="/write" element={<WritePage/>} />
      </Routes>
    </div>
  );
}

export default App;