import "./css/App.css";
import NavButtons from "./components/NavButtons";
import { ReactComponent as Logo } from "./img/cloud.svg";
import { useState } from "react";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div className="App">
      <header className="App_header"></header>

      <div className="navbar">
        <div className="navbar-nav">
          <div
            className="logo-wrapper"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="logo-name">Cloudy Logo</div>
            <Logo className="logo"></Logo>
          </div>
          
          <NavButtons />
        </div>
      </div>
      
      
      
    </div>
  );
}

export default App;
