import React, { useContext } from 'react';
import pokeapiIMG from '../assets/pokeapi.png';
import FavoriteContext from '../Context/favoritesContext';

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav>
      <div />
      <div>
        <img src={pokeapiIMG} alt="pokemon logo" className="navbar-img" />
      </div>
      <div>&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
