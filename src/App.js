import './App.css';
import Home from './pages/Home';
import Join from './pages/Join';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    < BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/donate" element={<Donate />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter >
  );
}

export default App;
