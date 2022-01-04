import { forwardRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import "../css/Items.css";
import "../css/util.css";

function Items() {
  return (
    <div className="Items">
      <Controller>
        <Item
          color={"#DC4D2E"}
          text={"red circle"}
          id_num={1}
          slide_direction={"vert"}
          slide_offset={"100px"}
        />
        <Item
          color={"#2E8ADC"}
          text={"blue circle"}
          id_num={2}
          slide_direction={"horiz"}
          slide_offset={"100px"}
        />
        <Item
          color={"#DCDA2E"}
          text={"yellow circle"}
          id_num={3}
          slide_direction={"horiz"}
          slide_offset={"100px"}
        />
      </Controller>
    </div>
  );
}

forwardRef();
function Item({ color, text, id_num, slide_direction, slide_offset }) {
  const slide_translate_val = `translate${
    slide_direction == "horiz" ? "X" : "Z"
  }(${slide_offset})`;

  const slide_style = {
    opacity: "0",
    transform: slide_translate_val,
  };

  return (
    <Controller>
      <Scene
        triggerHook={0.7}
        triggerElement={"#circle-1"}
        classTogle={""}
        reverse={false}
        indicators={true}
      >
        <div
          className="Item"
          style={{ backgroundColor: color, ...slide_style }}
          id={`circle-${id_num}`}
        >
          <div className="Item_text">{text}</div>
        </div>
      </Scene>
    </Controller>
  );
}

export default Items;
