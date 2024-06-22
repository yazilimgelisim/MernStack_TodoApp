import { useSelector, useDispatch } from "react-redux";
import { closeAddModal } from '../stores/modal.js';
import { addData } from '../stores/data.js';
import { useState } from "react";
import axios from "axios"


const AddModal = () => {
   const [textareaValue, setTextareaValue] = useState('');
   const { addModal } = useSelector(state => state.modal);
   const dispatch = useDispatch();



   return (
      <div className={addModal ? "modal active" : "modal"}>
         <div className="wrapper">

            <div className="topbar">
               <h3 className="mark">
                  Todo App
               </h3>

               <button className="closeButton" onClick={() => {
                  dispatch(closeAddModal());
               }}>
                  x
               </button>
            </div>

            <form onSubmit={async(e)=>{
               e.preventDefault();
               const formData = {text:textareaValue};
               let response = await axios.post('/add', formData);
               response = response.data;
               if(response.type){
                  dispatch(addData(response.message));
                  setTextareaValue('');
                  dispatch(closeAddModal());
               }
            }}>
               <div className="content">
                  <div className="area">
                     <textarea
                        type="text"
                        required="required"
                        value={textareaValue}
                        onChange={(e)=>{
                           setTextareaValue(e.target.value);
                        }}
                     ></textarea>
                     <span>Add New List</span>
                  </div>
               </div>

               <div className="buttons">
                  <button type='button' onClick={() => {
                     dispatch(closeAddModal());
                  }}>Cancel</button>
                  <button type='submit'>Add</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default AddModal