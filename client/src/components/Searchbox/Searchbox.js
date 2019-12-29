import React, { Fragment } from 'react';
import './Searchbox.css';

const Searchbox = () => {
	return (
        <Fragment>
            <div className="row">
                <div className="col s12">
                <div className="card">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">Book Search</span>
                        <div className="input-field">
                            <i className="material-icons prefix">book</i>
                            <textarea id="icon_prefix2" className="materialize-textarea text-darken-3"></textarea>
                            <label for="icon_prefix2">Book</label>
                            <button className="btn waves-effect waves-light right indigo darken-4" type="submit" name="action">Submit</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
	);
};

export default Searchbox;