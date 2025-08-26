import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    complaints: localStorage.getItem("complaint")
        ? JSON.parse(localStorage.getItem("complaint"))
        : []
};

const complaintSlice = createSlice({
    name: "complaint",
    initialState,
    reducers: {
        addToComplaint: (state, action) => {
            const item = action.payload;
            const index = state.complaints.findIndex((c) => c.id === item.id);

            if (index >= 0) {
                state.complaints[index] = { ...state.complaints[index], ...item };
            } else {
                state.complaints.push(item);
            }

            localStorage.setItem("complaint", JSON.stringify(state.complaints));
        },

        removeComplaint: (state, action) => {
            const id = action.payload;
            state.complaints = state.complaints.filter((c) => c.id !== id);
            localStorage.setItem("complaint", JSON.stringify(state.complaints));
        },

        clearComplaints: (state) => {
            localStorage.removeItem("complaint");
            state.complaints = [];
        },
    },
});

export const { addToComplaint, removeComplaint, clearComplaints } =
    complaintSlice.actions;

export default complaintSlice.reducer;
