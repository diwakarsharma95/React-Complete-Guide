import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>Hi, I'm React App</h1>
				<Person name={'Max'} age={28}></Person>
				<Person name={'Dave'} age={26}>
					My Hobbies: Racing
				</Person>
				<Person name={'John'} age={30}></Person>
			</div>
		);
	}
}

export default App;
