import './App.css';
import TicTacToe from './games/TicTacToe';
import DotsAndConnect from './games/DotsAndConnect';
import Home from './games/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
        <Route path='/dotsandconnect' element={<DotsAndConnect />} />
      </Routes>
  );
}

export default App;
