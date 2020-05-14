import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
	const [personsState, setPersonsState] = useState({
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Dave', age: 26 },
			{ name: 'John', age: 30 },
		],
		otherState: 'Some other value',
	});
	const [otherState, setOtherState] = useState('Some Other Value');

	const switchNameHandler = () => {
		setPersonsState({
			persons: [
				{ name: 'Max Payne', age: 28 },
				{ name: 'Dave jonason', age: 26 },
				{ name: 'John deCaprio', age: 30 },
			],
		});
	};

	return (
		<div className='App'>
			<h1>Hi, I'm React App</h1>
			<button onClick={switchNameHandler}>Switch Name</button>
			<Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
			<Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
				My Hobbies: Racing
			</Person>
			<Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
		</div>
	);
};

export default app;
