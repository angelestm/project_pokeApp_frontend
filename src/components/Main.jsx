import PokemonCard from "./PokemonCard";

function Main({pokemons, onPokemonClick}) {
  return (
      <div className="pokedex">
        {
            pokemons.length > 0 &&
            pokemons.map((pokemon) =>
                <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    image={pokemon.image}
                    onClick={() => onPokemonClick(pokemon)}
                />
            )
        }
      </div>
  )
}

export default Main;