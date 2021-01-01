import React from 'react';
import './App.css';
import NewComp from "./Components/NewComp"

class App extends React.Component{
  styles={
    fontStyle:"bold",
    color:"pink"
  };
  render(){
    return (<div className="App">
      <h1 style={this.styles}>Welcome!</h1> 
      <NewComp></NewComp>
      </div> );}
}

export default App;
