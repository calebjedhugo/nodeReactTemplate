import React from 'react';
import './App.css';
import ApiButtons from './components/ApiButtons'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

//Set up api calls to the back end.
import axios from 'axios'
axios.defaults.baseURL = function(){
  if(process.env.NODE_ENV === 'development'){
    return 'http://localhost:3001/api/v1/'
  } else {
    return '/api/v1/'
  }
}()

function App() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{'React/Nodejs template'}</Card.Title>
        <Card.Text>{'Click the buttons below to test a response from the api.'}</Card.Text>
        <ApiButtons />
      </Card.Body>
    </Card>
  )
}

export default App;
