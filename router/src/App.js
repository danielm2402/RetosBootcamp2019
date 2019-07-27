import React from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import jsonDatos from "./data/datos.json";
import Router from "./components/Router"

class App extends React.Component {
  state = { instituciones: [] };
  componentWillMount(){
    this.setState({instituciones:jsonDatos});
  };
  render(){
  
    return (
      <div className="App">
         <Container>
          <Router></Router>
      </Container>
      </div>
    );
  }
}

export default App;
