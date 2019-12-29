// DEPENDENCIES
import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import Search from '../Search/Search';
import axios from 'axios';

class Books extends Component {
    // Set state
	state = {
        books: [],
		searchTerms: ''
    };
    
    // As text is entered intot the field, the searchTerms are updated
    handleSearch = (e) => {
        this.setState({ searchTerms: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const queryURL = 'https://www.googleapis.com/books/v1/volumes';
        let params = {
            q: this.state.searchTerms
        };

        let response = await axios.get(queryURL, { params });
        console.log(response);
    }

    // Render components
	render() {
		const state = this.state;
		return (
			<div>
				<Navbar	/>
				<Jumbotron />
				<Search handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default Books;