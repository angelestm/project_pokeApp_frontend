import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./Homepage";
import Search from "./Search";

function App() {
  return (
      <Router>
        <div className="root">
          <div className="page">
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/search" element={<Search/>}/>
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
