import { createSlice } from "@reduxjs/toolkit";
export const bgSlice = createSlice({
  name: "bgColor",
  initialState: {
    value: "#ffffff",
  },
  reducers: {
    changeBgColor: (state) => {
      const hex = "123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 15);

        color = color + hex[random];
      }
      state.value = color;
    },
    reset: (state) => {
      state.value = "#ffffff";
    },
    changeColorManually: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeBgColor, reset, changeColorManually } = bgSlice.actions;
export default bgSlice.reducer;