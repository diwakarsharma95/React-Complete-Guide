import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

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
		showCockpit: true,
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}
	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('[App.js] componentDidUpdate');
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
			<Aux>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}>
					Remove Cockpit
				</button>
				{this.state.showCockpit ? (
					<Cockpit
						title={this.props.appTitle}
						showPersons={this.state.showPersons}
						personsLength={this.state.persons.length}
						clicked={this.togglePersonHandler}></Cockpit>
				) : null}
				{persons}
			</Aux>
		);
	}
}

export default withClass(App, classes.App);
