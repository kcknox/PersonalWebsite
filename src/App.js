import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="about" index element={<About />} />
        <Route path="contact" index element={<Contact />} />
        <Route path="projects" index element={<Projects />} />
        <Route path="experience" index element={<Experience />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
