import logo from "../images/pokeball-icon.png";
import searchB from "../images/Search.png";

function Header({onInputChange}) {
  const handleOnInputChange = (event) => {
    onInputChange(event.target.value);
  }
  
  return (
      <header className="header">
        <img src={logo} className="header__logo" alt="logo"/>
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