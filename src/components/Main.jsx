import PokemonCard from "./PokemonCard";

function Main({pokemons}) {
  return (
      <div className="pokedex">
        {
            pokemons.length > 0 &&
            pokemons.map((pokemon) =>
                <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    image={pokemon.image}
                    onClick={() => {
                    }}
                />
            )
        }
      </div>
  )
}

export default Main;