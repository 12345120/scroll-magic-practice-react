import "../css/Items.css";

function Items() {
  return (
    <div className="Items">
      <Item color={"#DC4D2E"} text={"red circle"} />
      <Item color={"#2E8ADC"} text={"blue circle"} />
      <Item color={"#DCDA2E"} text={"yellow circle"} />
    </div>
  );
}

function Item({ color, text }) {
  return (
    <div className="Item" style={{ backgroundColor: color }}>
      <div className="Item_text">{text}</div>
    </div>
  );
}

export default Items;
