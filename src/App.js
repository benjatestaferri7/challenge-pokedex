import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Pokedex from './Components/Pokedex';
import { getPokemons } from './api';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results)
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <>
      <Navbar />
      <div className="App">
        <SearchBar />
        <Pokedex pokemons={pokemons} />
      </div>
    </>
  );
}

export default App;
