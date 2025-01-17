import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AgentList from './components/AgentList';
import AddAgentForm from './components/AddAgentForm';
import EditAgentForm from './components/EditAgentForm';
import { AgentProvider } from './context/AgentContext';


const App: React.FC = () => {
  return (
    <AgentProvider>
      <Router>
        <Routes>
          <Route path='/' element={<AgentList />}></Route>
          <Route path='/add' element={<AddAgentForm />}></Route>
          <Route path='/edit/:id' element={<EditAgentForm />}></Route>          
        </Routes>
      </Router>
    </AgentProvider>
  );
}

export default App;
