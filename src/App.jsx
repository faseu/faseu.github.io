import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/home/home.jsx';
import Projects from './pages/projects/projects.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
