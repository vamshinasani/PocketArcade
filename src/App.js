import './App.css';
import TicTacToe from './games/TicTacToe';
import DotsAndConnect from './games/DotsAndConnect';
import Home from './games/Home';
import Root from './games/Root';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App() {
  const routes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
        <Route index element={<Home />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
        <Route path='/dotsandconnect' element={<DotsAndConnect />} />
      </Route>
  ))
  return (
      <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
