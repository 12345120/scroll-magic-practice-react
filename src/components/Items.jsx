import { forwardRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import "../css/Items.css";
import "../css/util.css";

function Items() {
  return (
    <div className="Items">
      <Controller>
        <Scene
          triggerHook={0.7}
          triggerElement={"#circle-1"}
          classToggle={[`.circle-1`, "slide-vert"]}
          reverse={true}
          indicators={true}
        >
          <Item
            color={"#DC4D2E"}
            text={"red circle"}
            id_num={1}
            slide_direction={"vert"}
            slide_offset={"100px"}
          />
        </Scene>
        <Scene
          triggerHook={0.7}
          triggerElement={"#circle-2"}
          classToggle={[`.circle-2`, "slide-horiz"]}
          reverse={true}
          indicators={true}
        >
          <Item
            color={"#2E8ADC"}
            text={"blue circle"}
            id_num={2}
            slide_direction={"horiz"}
            slide_offset={"100px"}
          />
        </Scene>
        <Scene
          triggerHook={0.7}
          triggerElement={"#circle-3"}
          classToggle={[`.circle-3`, "slide-horiz"]}
          reverse={true}
          indicators={true}
        >
          <Item
            color={"#DCDA2E"}
            text={"yellow circle"}
            id_num={3}
            slide_direction={"horiz"}
            slide_offset={"-100px"}
          />
        </Scene>
      </Controller>
    </div>
  );
}

const Item = forwardRef(
  ({ color, text, id_num, slide_direction, slide_offset }, ref) => {
    const slide_translate_val = `translate${
      slide_direction === "horiz" ? "X" : "Y"
    }(${slide_offset})`;

    const slide_style = {
      opacity: "0.5",
      transform: slide_translate_val,
    };

    return (
      <div
        ref={ref}
        className={`Item circle-${id_num}`}
        style={{ backgroundColor: color, ...slide_style }}
        id={`circle-${id_num}`}
      >
        <div className="Item_text">{text}</div>
      </div>
    );
  }
);

export default Items;
