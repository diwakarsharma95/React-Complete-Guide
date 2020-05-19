import React, { Fragment, Component } from 'react';
import classes from '../Person/Person.module.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {
	render() {
		console.log('[Person.js] rendering...');
		return (
			<Aux>
				<div className={classes.Person}>
					<p onClick={this.props.click}>
						I'm {this.props.name} and I am {this.props.age} years old!
					</p>
					<p>{this.props.children}</p>
					<input type='text' onChange={this.props.changed} value={this.props.name}></input>
				</div>
			</Aux>
		);
	}
}

export default Person;
