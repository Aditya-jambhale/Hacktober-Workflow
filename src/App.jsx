import React from 'react';
import { Route,Routes } from "react-router-dom";
import Home from './Home/Homecomp';
import Intro from './Info/Infocomponent';
import Initials from './Initials/Initialcomponent'
import Environment from './Environment/Envcomponent';
import ForkClone from './Fork/Fccomponent';
import Branch from './Branch/Branchcomp';
import Pull from './Pullrequests/Prcomponent';
import Hack from './Hacktoberfest/Hackcomp';
function App() {
  return (
   
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InfoBoxcom" element={<Intro />} />
          <Route path="/Env" element={<Environment />} />
          <Route path="/Command" element={<Initials />} />
          <Route path="/Forkclone" element={<ForkClone />} />
          <Route path="/Branch" element={<Branch />} />
          <Route path="/Pull" element={<Pull/>} />
          <Route path="/Hacktoberfest" element={<Hack/>} />
        </Routes>
      </div>
    
  );
}

export default App;
