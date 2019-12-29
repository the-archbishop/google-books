import React, { Fragment } from 'react';
import './Results.css'

const Results = () => {
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
                    <div className="card horizontal">
                    <div className="card-image">
                        <img id="book-image" src="http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                        <p className="card-title" id="title">The Hunger Games</p>
                        <div id="authors">
                            <p className="chip">Suzanne Collins</p>
                        </div>
                        <p id="description">
                        Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.
                        </p>
                        </div>
                        <div className="card-action">
                            <a id="google-link" class="waves-effect waves-light btn-small red lighten-2" href="http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api" target="_blank">View</a>
                            <a class="waves-effect waves-light btn-small red lighten-2">Save</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
	);
};

export default Results;