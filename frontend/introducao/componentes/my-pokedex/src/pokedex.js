import React from 'react';
import Pokemon from './pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return(
      <div className='pokedex'>
        { pokemons.map((pokemon) => <Pokemon pokemon={ pokemon } key={ pokemon.id }/>) }
      </div>
    )
  }
}

export default Pokedex;
