import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App" data-theme="light">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/post/:postId" element={<PostDetailPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;