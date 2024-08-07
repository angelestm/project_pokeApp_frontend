import { useNavigate} from "react-router-dom";
import pokedex from "../images/Pokedex.gif";

function Homepage() {
  const navigate = useNavigate();
  
  const handleOnClick = () => {
    navigate('/search');
  }
  return (
    <div className="homepage">
      <div className="homepage__container">
        <img className="homepage__img" src={pokedex} alt="pokedex"/>
        <button className="homepage__button" onClick={handleOnClick}>Ingresar</button>
      </div>
    </div>
  )
}

export default Homepage;