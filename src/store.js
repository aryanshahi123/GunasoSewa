import { configureStore } from "@reduxjs/toolkit";
import complaintSliceReducer from "./slices/complaintSlice";

const store = configureStore({
    reducer: {
        complaint: complaintSliceReducer,
    },
});

export default store;