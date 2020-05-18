import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}
	state = {
		persons: [
			{ id: '1', name: 'Max', age: 28 },
			{ id: '2', name: 'Dave', age: 26 },
			{ id: '3', name: 'John', age: 30 },
		],
		otherState: 'some other value',
		showPersons: false,
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}
	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

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
		console.log('[App.js] render');
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangeHandler}></Persons>
			);
		}

		return (
			<div className={classes.App}>
				<Cockpit
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonHandler}></Cockpit>
				{persons}
			</div>
		);
	}
}

export default App;