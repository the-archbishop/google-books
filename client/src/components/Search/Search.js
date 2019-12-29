import React, { Fragment } from 'react';
import './Search.css';

const Search = (props) => {
	return (
        <Fragment>
            <div className="row">
                <div className="col s12">
                <div className="card">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">Book Search</span>
                        <form onSubmit={props.handleSubmit}>
                            <div className="input-field">
                                <i className="material-icons prefix">book</i>
                                <input onChange={props.handleSearch} id="icon_prefix2" type="text" className="text-darken-3"></input>
                                <label htmlFor="icon_prefix2">Book</label>
                                <button className="btn waves-effect waves-light right indigo darken-4" type="submit" name="action">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
	);
};

export default Search;