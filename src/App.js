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

	// nameChangeHandler = (event) => {
	// 	this.setState({
	// 		persons: [
	// 			{ name: 'Max', age: 28 },
	// 			{ name: event.target.value, age: 26 },
	// 			{ name: 'John', age: 30 },
	// 		],
	// 	});
	// };

	deletePersonHandler = (personIndex) => {
		//This is used to create a copy of persons array
		// const persons = this.state.persons.slice();

		//One more way to create a copy of persons array
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
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
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}></Person>
						);
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
