import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Dave', age: 26 },
			{ name: 'John', age: 30 },
		],
	};

	switchNameHandler = () => {
		console.log('Was Clicked');
	};
	render() {
		return (
			<div className='App'>
				<h1>Hi, I'm React App</h1>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
					My Hobbies: Racing
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
			</div>
		);
	}
}

export default App;
