import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import TicTacToe from './games/TicTacToe';
import DotsAndConnect from './games/DotsAndConnect';
import Home from './games/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/PocketArcade'>
        <Routes>
          <Route exact path='/PocketArcade' element={<Home />}></Route>
          <Route path='/tictactoe' element={<TicTacToe />}></Route>
          <Route path='/dotsandconnect' element={<DotsAndConnect />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
