import logo from './logo.svg';


import Home from './Pages/Home/Home';

import Projects from './Pages/Projects/Projects';
import ProjectPosts from './Pages/Projects/ProjectPosts/ProjectPosts';
import ProjectPost from './Pages/Projects/ProjectPost/ProjectPost';

import Connect from './Pages/Connect/Connect';

import ComingSoon from './Pages/ComingSoon/ComingSoon';

import Navbar from './Pages/Home/HomeComponents/Navbar/Navbar';
import Footer from './Pages/Home/HomeComponents/Footer/Footer';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"

import BenchCalculator from './Pages/Projects/ManualPosts/BenchCalculator/BenchCalculator.js';
import PerlinNoise from './Pages/Projects/ManualPosts/PerlinNoise/PerlinNoise';
import ThisSite from './Pages/Projects/ManualPosts/ThisSite/ThisSite';

function App() {
  return (
    <div className="app__wrapper">
      <div className='center'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="" element={<ProjectPosts />} />
            <Route path="benchcalculator" element={<BenchCalculator />} />
            <Route path="perlin-noise" element={<PerlinNoise />} />
            <Route path="this-site" element={<ThisSite />} />
            <Route path=":projectSlug" element={<ProjectPost />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      </div>
    </div>
  );
}

export default App;
