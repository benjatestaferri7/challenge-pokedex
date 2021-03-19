import React from 'react';
import pokeapiIMG from '../assets/pokeapi.png';

const Navbar = () => {
  return (
    <nav>
      <div />
      <div>
        <img src={pokeapiIMG} alt="pokemon logo" className="navbar-img" />
      </div>
      <div>&#10084;&#65039; {100}</div>
    </nav>
  );
};

export default Navbar;
