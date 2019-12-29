import React, { Fragment } from 'react';
import './SearchCard.css'

const SearchCard = (props) => (
    <Fragment>
    <div className="card horizontal">
        <div className="card-image">
            <img id="book-image" src={props.image} alt="Book Cover" />
        </div>
        <div className="card-stacked">
            <div className="card-content">
            <p className="card-title" id="title">{props.title}</p>
            <p className="small-text">Published: {props.yearPublished}</p>
            <div id="authors">
                {
                    props.authors.map((author, i) => (
                        <p className="chip" key={i}>{author}</p>
                    )) 
                }
            </div>
            <p id="description">
            {props.description}
            </p>
            </div>
            <div className="card-action">
                <a id="google-link" className="waves-effect waves-light btn-small red lighten-2" href={props.link} target="_blank" rel="noopener noreferrer">View</a>
                <a href="#!" className="waves-effect waves-light btn-small red lighten-2">Save</a>
            </div>
        </div>
    </div>
</Fragment>
);

export default SearchCard;