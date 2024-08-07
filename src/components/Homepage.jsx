import pokedex from "../images/Pokedex.gif"
function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <img className="homepage__img" src={pokedex} alt="pokedex"/>
        <button className="homepage__button">Ingresar</button>
      </div>
    
    </div>
  )
}

export default Homepage;