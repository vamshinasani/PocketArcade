import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import TicTacToe from './games/TicTacToe';
import DotsAndConnect from './games/DotsAndConnect';
import Home from './games/Home';
import { RouterProvider,Route,createBrowserRouter,createRoutesFromChildren } from 'react-router-dom';

function App() {
  const routes = createBrowserRouter(createRoutesFromChildren(
    <Route path='/'>
      <Route index element={<Home/>}></Route>
      <Route path='/tictactoe' element={<TicTacToe/>}></Route>
      <Route path='/dotsandconnect' element={<DotsAndConnect/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
