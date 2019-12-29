import React, { Fragment } from 'react';
import './Results.css'
import SearchCard from '../SearchCard/SearchCard';

const Results = (props) => {
	return (
		<Fragment>
            <div className="row">
                <div className="col s12">
                    <h4>Results</h4>
                </div>
            </div>
            <div className="container">
                <div className="col s12">
                <div className="col s12 m7">
                    {
                        (props.books.length > 0) ? 
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
                        :
                        <div class="row">
                            <div class="card-panel">
                                <span>No search results.
                                </span>
                            </div>
                        </div>
                    }
                </div>
                </div>
            </div>
        </Fragment>
	);
};

export default Results;