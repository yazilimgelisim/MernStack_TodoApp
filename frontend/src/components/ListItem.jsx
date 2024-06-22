import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios'
import { deleteData } from "../stores/data";
import { useDispatch } from "react-redux";
import {openEditModal} from "../stores/modal";

const ListItem = ({ item }) => {
   const dispatch = useDispatch();
   return (
      <div className="listItem">
         <section type="text" placeholder='Your list item...'>{item.text}</section>
         <div className="buttons">
            <button className="editButton" onClick={() => {
               dispatch(openEditModal(item));
            }}><FiEdit /></button>


            <button className="deleteButton" onClick={async () => {
               let formData = {
                  id: item._id
               }
               let response = await axios.post('/delete', formData);
               response = response.data;

               if (response.type) {
                  dispatch(deleteData(formData));
               }
            }}><FaRegTrashAlt /></button>
         </div>
      </div>
   )
}

export default ListItem