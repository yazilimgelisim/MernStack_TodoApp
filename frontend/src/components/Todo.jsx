import React from 'react'
import Topbar from './Topbar.jsx'
import List from './List.jsx'
import AddModal from './AddModal.jsx'
import EditModal from './EditModal.jsx'

const Todo = () => {
   return (
      <>
         <div className="todo">
            <div className="wrapper">
               <Topbar />
               <List />
            </div>


         </div>
         <AddModal />
         <EditModal/>
      </>
   )
}

export default Todo