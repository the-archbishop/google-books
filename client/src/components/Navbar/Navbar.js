import React from 'react';

const Navbar = () => {
	return (
		<nav>
            <div class="nav-wrapper">
            <a href="#!" class="brand-logo"><i class="material-icons">local_library</i>Google Books</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/search"><i class="material-icons left">search</i>Search</a></li>
                <li><a href="/saved"><i class="material-icons left">save</i>Saved</a></li>
            </ul>
            </div>
        </nav>
	);
};

export default Navbar;