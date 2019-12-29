
// DEPENDENCIES
import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import Search from '../Search/Search';

class Books extends Component {
    // Set state
	state = {
		searchTerms: ''
	};

    // Render components
	render() {
		const state = this.state;
		return (
			<div>
				<Navbar	/>
				<Jumbotron />
				<Search />
			</div>
		);
	}
}

export default Books;