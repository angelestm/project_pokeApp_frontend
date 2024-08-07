import logo from "../images/pokeball-icon.png";
import searchB from "../images/Search.png";
import {useNavigate} from "react-router-dom";

function Header({onInputChange}) {
  const navigate = useNavigate();
  
  const handleOnInputChange = (event) => {
    onInputChange(event.target.value);
  }
  
  const handleOnPokeballClick = () => {
    navigate('/');
  }
  
  return (
      <header className="header">
        <img
            src={logo}
            className="header__logo"
            alt="logo"
            onClick={handleOnPokeballClick}
        />
        <div className="header__search">
          <input
              type="text"
              className="header__search_input"
              placeholder="Busca aqui tu pokemon"
              onChange={handleOnInputChange}
          />
          <button className="header__search_button">
            <img src={searchB} className="header__search_icon" alt="lupa"/>
          </button>
        </div>
      </header>
  )
}

export default Header;