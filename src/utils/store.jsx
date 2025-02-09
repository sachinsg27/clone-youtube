import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import someReducer from "../features/someSlice";

// const store = configureStore({
//   reducer: {
//     someState: someReducer,
//   },
// });

// export default store;
