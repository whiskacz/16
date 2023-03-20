
import './App.css';
import  React, { Component } from 'react';
import Text from './Text'


class App extends Component {
  state = {
    active1: false,
    active2: false
  }
  render(){

const btn_off = {
  border: '2px solid black',
  padding: '10px 20px',
  fontFamily: "arial",
  fontSize: 30,
  display: 'block',
  margin: '20px auto',
  backgroundColor: 'white',

}
const btn_on = {
  border: '2px solid black',
  padding: '10px 20px',
  fontFamily: "arial",
  fontSize: 30,
  display: 'block',
  margin: '20px auto',
  backgroundColor: 'cadetblue',
  color: 'white',

}

let btn = {
  border: '2px solid black',
  padding: '10px 20px',
  fontFamily: "arial",
  fontSize: 30,
  display: 'block',
  margin: '20px auto',
}
if(this.state.active2){
  btn.backgroundColor = 'cadetblue';
  btn.color = 'white';
}


  return (
    <div className="app">
      <button style={this.state.active1 ? btn_on : btn_off} onClick={() => {this.setState({active1: !this.state.active1})}}>{this.state.active1 ? "WŁĄCZ" : "WYŁĄCZ"}</button>
      <button style={btn} onClick={() => {this.setState({active2: !this.state.active2})}}>{this.state.active2 ? "WŁĄCZ" : "WYŁĄCZ"}</button>
      <h1>Witaj na stronie</h1>
      <Text />
    </div>
  );
}
}
export default App;
