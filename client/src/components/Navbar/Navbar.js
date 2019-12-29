import React from 'react';

const Navbar = () => {
	return (
		<nav>
            <div className="nav-wrapper">
            <a href="#!" className="brand-logo"><i className="material-icons">local_library</i>Google Books</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/search"><i className="material-icons left">search</i>Search</a></li>
                <li><a href="/saved"><i className="material-icons left">save</i>Saved</a></li>
            </ul>
            </div>
        </nav>
	);
};

export default Navbar;