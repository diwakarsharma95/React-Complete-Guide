import React, { Fragment } from 'react';
import './Person.css';

const person = (props) => {
	return (
		<Fragment>
			<div className='Person'>
				<p onClick={props.click}>
					I'm {props.name} and I am {props.age} years old!
				</p>
				<p>{props.children}</p>
				<input type='text' onChange={props.changed} value={props.name}></input>
			</div>
		</Fragment>
	);
};

export default person;
