const BASE_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemons = async (limit = 151) => {
  try {
    const response = await fetch(`${BASE_ENDPOINT}?limit=${limit}`);
    const data = await response.json();
    
    return await Promise.all(
        data.results.map(async (pokemon) => {
          const pokeResponse = await fetch(pokemon.url);
          const pokeData = await pokeResponse.json();
          return {
            id:pokeData.id,
            name: pokemon.name,
            image: pokeData.sprites.other['official-artwork'].front_default,
            sound: `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokeData.id}.ogg`,
            stats:{
              hp: pokeData.stats[0]?.base_stat || 0,
              attack: pokeData.stats[1]?.base_stat || 0,
              defense: pokeData.stats[2]?.base_stat || 0,
              specialAttack: pokeData.stats[3]?.base_stat || 0,
              specialDefense: pokeData.stats[4]?.base_stat || 0,
              speed: pokeData.stats[5]?.base_stat || 0,
            },
          };
        })
    );
  } catch (error) {
    console.error('Error al obtener datos de Pokémon:', error);
    throw error;
  }
};