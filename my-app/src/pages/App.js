import './App.css';
import Welcome from './Welcome';
import Mint from './Mint';
import SellNFT from './SellNFT';
import Profile from './Profile';

import {
  BrowserRouter as Router, Route, Link, Routes
} from "react-router-dom";
import Marketplace from './Marketplace';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/mint">Minter</Link>
            </li>
            <li>
              <Link to="/marketplace">Markeplace</Link>
            </li>
            <li>
              <Link to="/sellnft">Sell</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/mint" element={<Mint />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/sellnft" element={<SellNFT />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
