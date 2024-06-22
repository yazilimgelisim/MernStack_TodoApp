import { useSelector, useDispatch } from "react-redux";
import { closeEditModal } from '../stores/modal.js';
import { editData } from '../stores/data.js';
import { useState, useEffect } from "react";
import axios from "axios"


const EditModal = () => {
   const [textareaValue, setTextareaValue] = useState('');
   const { editModal, singleData } = useSelector(state => state.modal);
   const dispatch = useDispatch();

   useEffect(()=>{
      if(singleData.text){
         setTextareaValue(singleData.text);
      }
   }, [singleData])


   return (
      <div className={editModal ? "modal active" : "modal"}>
         <div className="wrapper">

            <div className="topbar">
               <h3 className="mark">
                  Todo App
               </h3>

               <button className="closeButton" onClick={() => {
                  dispatch(closeEditModal());
               }}>
                  x
               </button>
            </div>

            <form onSubmit={async(e)=>{
               e.preventDefault();
               const formData = {id:singleData._id, text:textareaValue};
               let response = await axios.post('/edit', formData);
               response = response.data;
               if(response.type){
                  dispatch(editData(response.message));
                  setTextareaValue('');
                  dispatch(closeEditModal());
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
                     <span>Update List Item</span>
                  </div>
               </div>

               <div className="buttons">
                  <button type='button' onClick={() => {
                     dispatch(closeEditModal());
                  }}>Cancel</button>
                  <button type='submit'>Edit</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default EditModal