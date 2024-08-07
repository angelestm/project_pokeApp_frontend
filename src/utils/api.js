const BASE_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';


const getStatValueByName = (name, stats) => {
  let value = 0;
  
  for (let i = 0; i < stats.length; i++) {
    const stat = stats[i];
    if (stat.stat.name === name) {
      value = stat.base_stat;
      break;
    }
  }
  
  return value;
}

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
            types: pokeData.types,
            stats:{
              hp: getStatValueByName('hp', pokeData.stats),
              attack: getStatValueByName('attack', pokeData.stats),
              defense: getStatValueByName('defense', pokeData.stats),
              specialAttack: getStatValueByName('special-attack', pokeData.stats),
              specialDefense: getStatValueByName('special-defense', pokeData.stats),
              speed: getStatValueByName('speed', pokeData.stats),
            },
          };
        })
    );
  } catch (error) {
    console.error('Error al obtener datos de Pokémon:', error);
    throw error;
  }
};