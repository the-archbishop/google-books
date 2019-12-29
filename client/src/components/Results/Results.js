import React, { Fragment } from 'react';
import './Results.css'
import SearchCard from '../SearchCard/SearchCard';

const Results = (props) => {
	return (
		<Fragment>
            <div className="row">
                <div className="col s12">
                    <h3>Results</h3>
                </div>
            </div>
            <div className="container">
                <div className="col s12">
                <div className="col s12 m7">
                    {
                        // (props.books > 0) ? 
                            props.books.map((book, i) => (
                                <SearchCard 
                                    key={i}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    title={book.volumeInfo.title}
                                    yearPublished={book.volumeInfo.publishedDate}
                                    authors={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    link={book.volumeInfo.infoLink}
                                />
                        )) 
                        // :
                        // <span>No search results.</span>
                    }
                </div>
                </div>
            </div>
        </Fragment>
	);
};

export default Results;