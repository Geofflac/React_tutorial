// this function state will help us to choose what is appeareing on the screen
import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

// better to start the funtion of customed components with an upper case to differentiate with HTML elements
// we need to add props (can be names anything) to accept the received value from App
function Todo(props) {
    // we can declare a 'privte funtion' inside a function, and in this area as it is not the return we can type standard JS
    // this is called a hook, useState always return an array of 2 elements, the first element is the initial status in this case false, the second element is function that can help to change that value.
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler() {
        // console.log('clicked');
        // console.log(props.text);
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

  return (
    <div className="card">
        {/* to ensure code is taken as javascript and not plain html we need to put in {} such as the prop text, it is how we can reuse components */}
      <h2>{props.text}</h2>
      {/* We cannot put 'class' as it is not a HTML id but a JS code */}
      <div className="action">
          {/* the onclick button can be added inside the button property, in normal javascript we would have had to make a special query for this event. 
          We do not want call the function with () at the end if not it will be executed as soon as it is red. */}
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
      {/* in that case we arenot able to use onClick function as the component below is customized, we have to recreate it in our customized component */}
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
