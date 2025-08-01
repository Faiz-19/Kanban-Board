import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "Modal",
  initialState: {
    addModal: false,
    editModal: false,
    targetColumn: null,
  },
  reducers: {
    openAddModal: (state, action) => {
      state.addModal = true;
      state.targetColumn = action.payload;
    },
    closeAddModal: (state) => {
      state.addModal = false;
    },
    openEditModal: (state) => {
      state.editModal = true;
    },
    closeEditModal: (state) => {
      state.editModal = false;
    },
  },
});

export const { openAddModal, closeAddModal, openEditModal, closeEditModal } =
  modalSlice.actions;
export default modalSlice.reducer;
