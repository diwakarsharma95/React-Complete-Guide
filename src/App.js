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
		otherState: 'some other value',
		showPersons: false,
	};

	switchNameHandler = (newName) => {
		//this.state.persons[0].name = 'Max Payne'; //DON'T DO THIS
		this.setState({
			persons: [
				{ name: newName, age: 28 },
				{ name: 'Dave jonason', age: 26 },
				{ name: 'John deCaprio', age: 30 },
			],
		});
	};
	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Max', age: 28 },
				{ name: event.target.value, age: 26 },
				{ name: 'John', age: 30 },
			],
		});
	};
	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			curser: 'pointer',
		};

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person) => {
						return <Person name={person.name} age={person.age}></Person>;
					})}
				</div>
			);
		}
		return (
			<div className='App'>
				<h1>Hi, I'm React App</h1>
				<button style={style} onClick={this.togglePersonHandler}>
					Switch Name
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
