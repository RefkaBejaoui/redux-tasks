import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { edit } from '../redux/actions';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');

function Edit({id , Description , isDone}) {
    let subtitle;
    const [newDescription , setNewDescription] = useState(Description)
  const [modalIsOpen, setIsOpen] = React.useState(false);
const dispatch = useDispatch()
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
 
  const editTask = (e)=> {
    e.preventDefault()

dispatch(edit({id,newDescription}))
closeModal();
  }
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit task</h2>
        
        <form>
          <input type ="text"  value ={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/>
          <button onClick={editTask}>Edit task</button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default Edit;<>

</>