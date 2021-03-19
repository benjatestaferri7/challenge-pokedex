import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Pokedex from './Components/Pokedex';
import { getPokemons, getPokemonsData } from './api';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    } catch (error) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <>
      <Navbar />
      <div className="App">
        <SearchBar />(
        <Pokedex
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      </div>
    </>
  );
}

export default App;
