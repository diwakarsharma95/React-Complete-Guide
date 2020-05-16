import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: '1', name: 'Max', age: 28 },
			{ id: '2', name: 'Dave', age: 26 },
			{ id: '3', name: 'John', age: 30 },
		],
		otherState: 'some other value',
		showPersons: false,
	};

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((person) => {
			return person.id === id;
		});
		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons,
		});
	};

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
			backgroundColor: 'green',
			color: 'white',
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
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangeHandler(event, person.id)}></Person>
						);
					})}
				</div>
			);
			style.backgroundColor = 'red';
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
