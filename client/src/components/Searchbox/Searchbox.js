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
                            <textarea id="icon_prefix2" class="materialize-textarea white-text"></textarea>
                            <label for="icon_prefix2">Book</label>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
	);
};

export default Searchbox;