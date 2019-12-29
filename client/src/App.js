import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Searchbox from './components/Searchbox/Searchbox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Searchbox />
    </div>
  );
}

export default App;
