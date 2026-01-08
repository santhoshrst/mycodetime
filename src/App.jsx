import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import CreateContest from './pages/CreateContest.jsx';
import Compiler from './pages/Compiler.jsx';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/create-contest" element={<CreateContest />} />
        <Route path="/compiler" element={<Compiler />} />
      </Routes>
    </div>
  );
}


