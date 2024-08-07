import Main from "./Main";
import Header from "./Header";
import {useEffect, useState} from "react";
import {getAllPokemons} from "../utils/api";
import Preloader from "./Preloader";

function App() {
  const [filter, setFilter] = useState('');
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isHomePage, setIsHomePage] = useState(false);
  
  // Loading pokemons
  useEffect(() => {
    if (!isHomePage) {
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
          })
    }
  }, [isHomePage]);
  
  useEffect(() => {
    const newPokemons = allPokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(filter.toLowerCase());
    });
    setPokemons([...newPokemons]);
  }, [filter]);
  
  const handleOnSearchChange = (value) => {
    setFilter(value);
  }
  
  return (
      <div className="root">
        <div className="page">
          <Header onInputChange={handleOnSearchChange}/>
          {
              loading &&
              <Preloader/>
          }
          {
              !loading &&
              <Main pokemons={pokemons}/>
          }
          {
              !loading &&
              errorMessage &&
              <p>{errorMessage}</p>
          }
        </div>
      </div>
  );
}

export default App;
