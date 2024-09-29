import React from 'react';
import { Route,Routes } from "react-router-dom";
import Home from './Home/Home';
import Intro from './Info/Infocomponent';
import Initials from './Initials/Initialcomponent'
import Environment from './Environment/Envcomponent';
import ForkClone from './Fork/Fccomponent';
import Branch from './Branch/Branch';
import Pull from './Prandpl/Prcomponent';
import Hack from './Hacktoberfest/Hack';
function App() {
  return (
   
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InfoBoxcom" element={<Intro />} />
          <Route path="/Env" element={<Environment />} />
          <Route path="/Initial" element={<Initials />} />
          <Route path="/Forkclone" element={<ForkClone />} />
          <Route path="/Branch" element={<Branch />} />
          <Route path="/Pr" element={<Pull/>} />
          <Route path="/Hacktoberfest" element={<Hack/>} />
        </Routes>
      </div>
    
  );
}

export default App;
