import React, {Component} from 'react';
import Login from "./Components/Login.js"
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      username: null
    }
  }

  setUserName = (username) => {
     this.setState({username: username})
  }




  render(){
    console.log(this.state)
    return(
      <div>
        <Login setUserName={this.setUserName}/>
        </div>
    )
  }

}

export default App;
