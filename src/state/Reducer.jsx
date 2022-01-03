export const initialState = {
  theme: {
    text_color: "text-black",
    bg_color: "bg-black",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME_COLOR":
      return {
        ...state,
        theme: { color: action.color },
      };
  }
};
