import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   addModal: false,
   editModal:false,
   singleData: {}
}


const modal = createSlice({
   name: "modal",
   initialState,
   reducers: {
      openAddModal: (state) => {
         state.addModal = true
      },
      closeAddModal: (state) => {
         state.addModal = false
      },
      openEditModal: (state, {payload}) => {
         state.singleData = payload
         state.editModal = true
      },
      closeEditModal: (state) => {
         state.editModal = false
      }
   }
})


export const { openAddModal, closeAddModal, openEditModal, closeEditModal } = modal.actions;
export default modal.reducer