import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "Sample Workflow Item",
      status: "DRAFT",
    },
  ],
};

const workflowSlice = createSlice({
  name: "workflow",
  initialState,
  reducers: {
    submitItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.status = "SUBMITTED";
      }
    },
    reviewItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.status = "IN_REVIEW";
      }
    },
    approveItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.status = "APPROVED";
      }
    },
  },
});

export const {
  submitItem,
  reviewItem,
  approveItem,
} = workflowSlice.actions;

export default workflowSlice.reducer;
