import React from 'react';
import firebase from "./firebase.js";

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

const Form = ({setInputText, inputText}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputText);

    //DB WORK

    const userRef = db.collection("messages").add({
      value: inputText
    });


    //END DB WORK
    setInputText('');

  }


  return(
    <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
      <button onClick={submitHandler} className="todo-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
