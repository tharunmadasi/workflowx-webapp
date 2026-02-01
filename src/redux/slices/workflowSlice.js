import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "Sample Workflow Item",
      status: "DRAFT",
      history: [
        {
          action: "CREATED",
          role: "user",
          time: new Date().toLocaleString(),
        },
      ],
    },
  ],
};


const workflowSlice = createSlice({
  name: "workflow",
  initialState,
  reducers: 
  {
  submitItem(state, action) {
    const item = state.items.find(i => i.id === action.payload);
    if (item) {
      item.status = "SUBMITTED";
      item.history.push({
        action: "SUBMITTED",
        role: "user",
        time: new Date().toLocaleString(),
      });
    }
  },

  reviewItem(state, action) {
    const item = state.items.find(i => i.id === action.payload);
    if (item) {
      item.status = "IN_REVIEW";
      item.history.push({
        action: "REVIEWED",
        role: "admin",
        time: new Date().toLocaleString(),
      });
    }
  },

  approveItem(state, action) {
    const item = state.items.find(i => i.id === action.payload);
    if (item) {
      item.status = "APPROVED";
      item.history.push({
        action: "APPROVED",
        role: "admin",
        time: new Date().toLocaleString(),
      });
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
