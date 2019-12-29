// DEPENDENCIES
import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import Search from '../Search/Search';
import axios from 'axios';
import Results from '../Results/Results';

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

    // submitEvent = this.handleSubmit.bind(this);
    handleSubmit = (e) => {
        e.preventDefault();

        const queryURL = 'https://www.googleapis.com/books/v1/volumes';
        let params = {
            q: this.state.searchTerms
        };

        axios.get(queryURL, { params }).then(response => {
            this.setState({ books: [...response.data.items] });
            console.log(this.state.books);
        });
        
    }

    // Render components
	render() {
		const state = this.state;
		return (
			<div>
				<Navbar	/>
				<Jumbotron />
				<Search handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} />
                <Results books={state.books}/>
            </div>
		);
	}
}

export default Books;