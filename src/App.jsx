import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home/home';
import Intro from './intro/intro';
import Initials from './Initials/initial'
import Environment from './Environment/env';
import ForkClone from './Fork/fc';
import Branch from './Branch/branch';
import Pull from './Prandpl/pr';
import Hack from './Hacktoberfest/hack';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/Env" element={<Environment />} />
          <Route path="/initial" element={<Initials />} />
          <Route path="/forkclone" element={<ForkClone />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/pr" element={<Pull/>} />
          <Route path="/hacktoberfest" element={<Hack/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
