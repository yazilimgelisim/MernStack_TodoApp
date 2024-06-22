import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const response = await axios.post('/'); 
const responseData = response.data.message


const initialState = {
   data: responseData
}


const allDataProcess = createSlice({
   name:'allDataProcess',
   initialState,
   reducers:{
      addData:(state, {payload})=>{
         state.data = [...state.data, payload];
      },
      deleteData:(state, {payload})=>{
         state.data = state.data.filter(item=>item._id !== payload.id)
      },
      editData:(state, {payload})=>{
         let newData = state.data.map(item=>item._id === payload._id ? payload : item);
         state.data = newData;
      },
      searchData:(state, {payload})=>{
         let newData = responseData.filter(item=>item.text.toLowerCase().startsWith(payload.toLowerCase()));
         state.data = newData;
      }
   }
})

export const {addData, deleteData, editData, searchData} = allDataProcess.actions;
export default allDataProcess.reducer