import {useEffect, useRef} from "react";
import closeButton from "../images/CloseIcon.png";

function Popup({pokemon, onClose}) {
  const ref = useRef(null);
  
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  };
  
  useEffect(() => {
    try {
      const audio = new Audio(pokemon.sound);
      audio.play();
    } catch (error) {
      console.error('There was an error getting the pokemon audio');
    }
    
    // Handle close modal outside the card
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
      <div className="popup">
        <div ref={ref} className="popup__type-color" style={{backgroundColor: '#cc0000'}}>
          <img
              alt="Icono de cerrar"
              className="popup__close-button" id="close-button"
              src={closeButton}
              onClick={onClose}
          />
          <img className="popup__img" src={pokemon.image} alt="Pokemon"/>
          <p className="popup__number">#{pokemon.id.toString().padStart(3, '0')}</p>
          <div className="popup__container">
            <h4 className="popup__name">{pokemon.name.toUpperCase()}</h4>
            <div className="popup__stats-container">
              <p className="popup__type">
                {
                  pokemon.types.map((type) => type.type.name).join(" / ")
                }
              </p>
            </div>
            <div className="popup__stats-container">
              <h4 className="popup__stats-title">Stats</h4>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <ul>
                <li><strong>HP: </strong>{pokemon.stats.hp}</li>
                <li><strong>Attack: </strong>{pokemon.stats.attack}</li>
                <li><strong>Defense: </strong>{pokemon.stats.defense}</li>
              </ul>
                <ul>
                  <li><strong>Speed: </strong>{pokemon.stats.speed}</li>
                  <li><strong>Sp. Atk.: </strong>{pokemon.stats.specialAttack}</li>
                  <li><strong>Sp. Def.: </strong>{pokemon.stats.specialDefense}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Popup;