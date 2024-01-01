import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';

import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/WebSite" element={<HomePage/>} />
          <Route path="/projects" element={<Portfolio/>} />
        </Routes>
      </div>
  
    </BrowserRouter>
  );
}

export default App;
