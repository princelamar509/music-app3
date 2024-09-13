import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons'; // Import a valid icon

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <h1>
                Harmony Hub 
                <FontAwesomeIcon icon={faMusic} /> {/* Use the imported icon */}
            </h1>
            <button
                onClick={() => {
                    setLibraryStatus(!libraryStatus);
                }}
            >
                <h4>Library</h4>
            </button>
        </nav>
    );
};

export default Nav;
