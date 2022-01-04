import "./css/App.css";
import NavButtons from "./components/NavButtons";
import { ReactComponent as Logo } from "./img/cloud.svg";
import { useState } from "react";
import MainBanner from "./components/MainBanner";
import Items from "./components/Items";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div className="App">
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

      <MainBanner />

      <Items/>
    </div>
  );
}

export default App;
