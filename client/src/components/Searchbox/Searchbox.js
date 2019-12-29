import React, { Fragment } from 'react';
import './Searchbox.css';

const Searchbox = () => {
	return (
        <Fragment>
            <div class="row">
                <div class="col s12">
                <div class="card">
                    <div class="card-content grey-text text-darken-3">
                        <span class="card-title">Book Search</span>
                        <div class="input-field">
                            <i class="material-icons prefix">book</i>
                            <textarea id="icon_prefix2" class="materialize-textarea text-darken-3"></textarea>
                            <label for="icon_prefix2">Book</label>
                            <button class="btn waves-effect waves-light right indigo darken-4" type="submit" name="action">Submit</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
	);
};

export default Searchbox;