import React from 'react';

const PokemonCard = (
    {image, name, onClick}
) => {
  
  const handleOnClickCard = (event) => {
    onClick();
  }
  
  return (
      <div className="pokemon-container" onClick={handleOnClickCard}>
        <img className="pokemon" src={image} alt="Pokemon"/>
        <p className="name">{name}</p>
      </div>
  );
}

export default PokemonCard;