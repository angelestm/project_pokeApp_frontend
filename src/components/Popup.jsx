import pokemon from "../images/pikachu-seeklogo.svg";
import closeButton from "../images/CloseIcon.png";

function Popup() {
  return (
      <div className="popup">
        <div className="popup__type-color" style={{backgroundColor: '#cc0000'}}>
          <img
              alt="Icono de cerrar"
              className="popup__close-button" id="close-button"
              src={closeButton}
          />
          <img className="popup__img" src={pokemon} alt="Pokemon"/>
          <p className="popup__number">#027</p>
          <div className="popup__container">
            <h4 className="popup__name">Pikachu</h4>
            <div className="popup__stats-container">
              <p className="popup__type">Type</p>
            </div>
            <div className="popup__stats-container">
              <h4 className="popup__stats-title">Stats</h4>
              <ul>
                <li><strong>HP:</strong> 215656</li>
                <li><strong>Attack:</strong>64546</li>
                <li><strong>Defense:</strong> 545</li>
                <li><strong>Speed:</strong> 44554</li>
              </ul>
            </div>
          </div>
        </div>
      
      
      </div>
  )
}

export default Popup;