import React from 'react';

const Pokemon = (props) => {
  const { pokemon } = props;

  const redHeart = '&#10084;&#65039;';
  const blackHeart = '❤';

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button>
            <div className="pokemon-fav">{blackHeart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
