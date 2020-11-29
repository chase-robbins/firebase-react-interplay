import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav.js';
import Form from './components/Form.js';
import React, {useState, useEffect} from 'react';


function App() {

  const [inputText, setInputText] = useState("");

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>

        </Switch>
        <Form inputText={inputText} setInputText={setInputText} />
      </div>
    </Router>
  );
}

export default App;
