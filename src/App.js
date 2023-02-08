import './App.css';
import Header from './components/Header';
import Home from './components/Home.js'
import Coins from './components/Coins.js'
import CoinDetails from './components/CoinDetails.js'
import Exchanges from './components/Exchanges.js'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coins' element={<Coins/>}></Route>
        <Route path='/coinDetails'element={<CoinDetails/>}></Route>
        <Route path='/exchanges' element={<Exchanges/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
