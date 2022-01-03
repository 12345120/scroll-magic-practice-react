import "../css/NavButtons.css";
import "../css/util.css"
import { useStateValue } from "../state/StateProvider";

function NavButtons() {
  const [{theme : { text_color }}, dispatch] = useStateValue();
  
  function NavButton({ text }) {
    
    return <div className={`NavButton ${text_color}`}>{text}</div>;
  }
  
  return (
    <div className="NavButtons">
      <NavButton text={'About'}/>
      <NavButton text={'Contact'}/>
      <NavButton text={'More'}/>
    </div>
  );
}

export default NavButtons;
