import { configureStore } from '@reduxjs/toolkit';
import ModalReducer from "../features/modal/modalSlice"
import OGReducer from "../features/board/boardSlice"

export const store = configureStore({
  reducer: {
    Modal: ModalReducer,
    OG: OGReducer,
  },
});