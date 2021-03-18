import React, { useState } from 'react';
import { searchPokemon } from '../api';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    console.log(data);
  };

  return (
    <div>
      <div>
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div>
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
