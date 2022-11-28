import { Game } from './pages/game.js';
import { BingoCard } from './pages/bingoCard.js';
import { Index } from './pages/index.js';
import '/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




export const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
          <Route path="game" element={<Game />} />
          <Route path="card" element={<BingoCard />} />
      </Routes>
    </Router>
  )
} 