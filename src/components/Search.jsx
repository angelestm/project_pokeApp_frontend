import React, {useEffect, useState} from "react";
import Header from "./Header";
import Preloader from "./Preloader";
import Main from "./Main";
import {getAllPokemons} from "../utils/api";
import Popup from "./Popup";

const Search = () => {
  const [filter, setFilter] = useState('');
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);
  
  // Loading pokemons
  useEffect(() => {
    setLoading(true);
    getAllPokemons()
        .then((data) => {
          setAllPokemons(data);
          setPokemons(data);
        })
        .catch((error) => {
          setErrorMessage('There was an error getting Pokemons list');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
        })
        .finally(() => {
          setLoading(false);
        });
  }, []);
  
  useEffect(() => {
    const newPokemons = allPokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(filter.toLowerCase());
    });
    setPokemons([...newPokemons]);
  }, [filter]);
  
  const handleOnSearchChange = (value) => {
    setFilter(value);
  }
  
  const handleOnPokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setOpenModal(true);
  }
  
  const handleOnClose = () => {
    setOpenModal(false);
  }
  
  return (
      <>
        <Header onInputChange={handleOnSearchChange}/>
        {
            loading &&
            <Preloader/>
        }
        {
            !loading &&
            <Main pokemons={pokemons} onPokemonClick={handleOnPokemonClick}/>
        }
        {
            !loading &&
            errorMessage &&
            <p>{errorMessage}</p>
        }
        {
            openModal &&
            selectedPokemon &&
            <Popup onClose={handleOnClose} pokemon={selectedPokemon}/>
        }
      </>
  );
}

export default Search;