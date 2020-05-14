import React, { Fragment } from 'react';

const person = (props) => {
	return (
		<Fragment>
			<p onClick={props.click}>
				I'm {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
		</Fragment>
	);
};

export default person;
