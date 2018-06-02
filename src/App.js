import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor () {
		super();
		this.state ={isGoing: false,text_plane:""}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
    	this.setState({isGoing: event.target.checked,
    		text_plane: event.target.checked?
    		 "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." : "" 
    		});
  	}

  render() {
    return (
      <div className="wrapper">
        <label><input type="checkbox"
          checked={this.state.isGoing}
           onChange={this.handleInputChange}
             /> Mostrar información importante</label>
        <p>{this.state.text_plane}</p>
      </div>
    );
  }

}
export default App;
