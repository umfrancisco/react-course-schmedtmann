import { createSlice } from "@reduxjs/toolkit";
import type { CustomerState } from "../../types";

const initialState: CustomerState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    create(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
      state.createdAt = action.payload.createdAt;
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  }
});

export const { create, updateName } = customerSlice.actions;
export default customerSlice.reducer;