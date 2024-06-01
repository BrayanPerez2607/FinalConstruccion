import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PerroList from './components/PerroList';
import AddPerro from './components/AddPerro';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PerroList />} />
          <Route path="/add" element={<AddPerro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

