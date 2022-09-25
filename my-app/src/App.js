import './App.css';
import Welcome from './pages/Welcome';
import Mint from './pages/Mint';

import {
  BrowserRouter as Router, Route, Link, Routes
} from "react-router-dom";

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
              <Link to="/mint">Mint</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/mint" element={<Mint />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}
