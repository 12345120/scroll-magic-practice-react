import { forwardRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import "../css/Items.css";
import "../css/util.css";

function Items() {
  return (
    <div className="Items">
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
        slide_offset={"-100px"}
      />
    </div>
  );
}

function Item({ color, text, id_num, slide_direction, slide_offset }) {
  const slide_translate_val = `translate${
    slide_direction == "horiz" ? "X" : "Y"
  }(${slide_offset})`;

  const slide_style = {
    opacity: "0.5",
    transform: slide_translate_val,
  };

  return (
    <Controller>
      <Scene
        triggerHook={0.7}
        triggerElement={`#circle-${id_num}`}
        offset={`${slide_direction === "horiz" ? "0" : slide_offset.substring(slide_offset.length-2)}`}
        classToggle={[`.circle-${id_num}`, `${slide_direction === "horiz" ? "slide-horiz" : "slide-vert"}`]}
        reverse={true}
        indicators={true}
      >
        <div
          className={`Item circle-${id_num}`}
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
