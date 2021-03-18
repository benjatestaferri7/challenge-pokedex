import React from 'react';
import './styles.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <SearchBar />
      </div>
    </>
  );
}

export default App;
